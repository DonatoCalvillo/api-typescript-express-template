import express, { type Application } from 'express'
import cors from 'cors'

import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

import { swaggerConfiguration } from './config/swagger'
import { variables } from './config/variables'

import { type Logger } from './shared/domain/logger'
import { container } from './shared/infrastructure/container'

import { healthRouter } from './health/infrastructure/api/routes/health-router'

export class App {
  _app: Application
  _port: number
  _logger: Logger

  constructor () {
    this._app = express()

    this._port = variables.get('server.port')

    this._logger = container.resolve<Logger>('logger')

    this.middlewares()

    this.router()
  }

  middlewares (): void {
    // CORS
    this._app.use(cors())

    // Accept JSON
    this._app.use(express.json({ limit: '500kb' }))
  }

  router (): void {
    this._app.use('/api/health', healthRouter)

    const specs = swaggerJsDoc(swaggerConfiguration)
    this._app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs))
  }

  listen (): void {
    this._app.listen(this._port, () => {
      this._logger.info(`[APP] - Started application on port ${this._port}`)
      this._logger.info(`[APP] - Environment: ${variables.get('env')}`)
    })
  }
}
