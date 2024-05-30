import Companies from "../models/Company.model.js"
import {faker} from "@faker-js/faker"

export const createCompany = (req, res) => {
    const companyObject = {
        _id : faker.number.int(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    Companies.push(companyObject)
    return res.status(201).json(`Company added`)
}

export const getAllCompanies = async(req, res) => {
    return res.status(200).json(Companies)
}

