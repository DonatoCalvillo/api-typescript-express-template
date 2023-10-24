import * as Awilix from 'awilix'
import { WinstonLogger } from './logger/winston-logger'
import { HealthController } from '../../health/infrastructure/api/controllers/health-controller'

const container = Awilix.createContainer({
  injectionMode: Awilix.InjectionMode.PROXY
})

container.register({
  logger: Awilix.asClass(WinstonLogger),
  healthController: Awilix.asClass(HealthController)
})

export { container }
