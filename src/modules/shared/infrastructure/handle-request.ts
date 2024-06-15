import { type Request, type Response } from 'express'
import * as Awilix from 'awilix'

import { container } from './container'
import { type Logger } from '../domain/logger'
import { type Controller } from '../domain/controller'
import { UuidV4 } from './uuid-v4'

export const handleRequest =
  (controllerInstanceName: string) => async (req: Request, res: Response) => {
    const uuidGenerator = new UuidV4()

    const requestId = uuidGenerator.generateShort()
    res.setHeader('request-id', requestId)

    const logger = container.resolve<Logger>('logger')
    const requestLogger = logger.child({ requestId })

    const requestContainer = container.createScope()

    requestContainer.register({
      logger: Awilix.asValue(requestLogger)
    })

    const controllerInstance = requestContainer.resolve<Controller>(
      controllerInstanceName
    )

    await controllerInstance.run(req, res)
  }
