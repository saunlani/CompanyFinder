import { companyRouter } from './company/company'
import { Application } from "express"

export const routes = (app: Application) => {
  app.use('/api/v1/companies', companyRouter())
}