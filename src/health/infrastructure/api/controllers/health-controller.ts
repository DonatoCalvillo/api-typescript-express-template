import { type Request, type Response } from 'express'
import { type Logger } from '../../../../shared/domain/logger'

export class HealthController {
  _logger: Logger
  constructor (dependencies: { logger: Logger }) {
    this._logger = dependencies.logger
  }

  async run (req: Request, res: Response): Promise<void> {
    this._logger.info('[HealthController] API Healthy')
    res.status(200).send()
  }
}
