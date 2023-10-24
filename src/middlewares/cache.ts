import { type NextFunction, type Request, type Response } from 'express'

export const setCache = (req: Request, res: Response, next: NextFunction): void => {
  // Keep cache for 5 min (in seconds)
  const period = 60 * 5

  if (req.method === 'GET') {
    res.set('Cache-control', `public, max-age=${period}`)
  } else {
    res.set('Cache-control', 'no store')
  }

  next()
}
