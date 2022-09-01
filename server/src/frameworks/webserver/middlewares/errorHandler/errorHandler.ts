import { Request, Response, NextFunction } from "express"

// Passes errors to express error middleware
export const errorHandler = (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await fn(req, res, next)
  } catch (error) {
    return res.status(500).json({ error: 'An unknown error has occurred' })
  }
}