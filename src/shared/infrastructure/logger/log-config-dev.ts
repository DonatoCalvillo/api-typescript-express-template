import {
  createLogger,
  format,
  transports,
  type Logger as WinstonLoggerType
} from 'winston'

const { combine, timestamp: toFormat, printf } = format

const devFormat = printf(({ timestamp, level, message, ...metadata }) => {
  let msg = ''

  const requestId: string | null = metadata.metadata.requestId

  if (requestId !== null && requestId !== '') {
    msg += `[${JSON.stringify(requestId)}] - `
  }

  msg += typeof message === 'object' ? JSON.stringify(message) : message

  return `${timestamp} [${level}]: ${msg}`
})

const devConfig = (): WinstonLoggerType =>
  createLogger({
    level: 'debug',
    format: combine(
      format.json(),
      format.colorize(),
      format.prettyPrint(),
      format.metadata(),
      toFormat({ format: 'HH:mm:ss' }),
      devFormat
    ),
    transports: [new transports.Console()]
  })

export default devConfig
