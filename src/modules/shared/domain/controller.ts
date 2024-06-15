import { type Request, type Response } from 'express'

export interface Controller {
  run: (req: Request, res: Response) => Promise<void>
}
