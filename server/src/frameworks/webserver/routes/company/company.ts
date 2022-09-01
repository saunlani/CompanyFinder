import express, { Request, Response } from "express"
import { fetchAllCompanies } from '../../../../controllers/companyController'
import { errorHandler } from '../../middlewares/errorHandler/errorHandler'

export const companyRouter = () => {
  const router = express.Router()
  // GET endpoint
  router.get('/', errorHandler(async (req: Request, res: Response) => {
    const allCompanies = await fetchAllCompanies()
    return res.status(200).json({ data: allCompanies })
  }))
  return router
}