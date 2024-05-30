import Users from "../models/User.model.js"
import Companies from "../models/Company.model.js"
import {faker} from "@faker-js/faker"

export const createUser = (req, res) => {
    const userObject = {
        _id: faker.number.int(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number()
    }
    Users.push(userObject)
    console.log(res.body)
    return res.status(201).json(`User added`)
}

export const getAllUsers = async(req, res) => {
    return res.status(200).json(Users)
}

export const getUsersAndCompanies = async(req, res) => {
    return res.status(200).json([Users, Companies])
}

// export const createUser = async(req, res) => {
//     Users.push(req.body)
//     return res.status(201).json(`User added`)
// }

// export const getUserById = async(req, res) => {
//     const {_id} = req.params
//     return res.status(200).json(Users[_id])
// }

