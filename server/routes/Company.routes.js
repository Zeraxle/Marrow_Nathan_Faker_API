import {Router} from 'express'
import { createCompany, getAllCompanies } from '../controllers/Company.controller.js'

const companyRouter = Router()

companyRouter.route('/companies/new')
    .get(getAllCompanies)
    .post(createCompany)

export default companyRouter