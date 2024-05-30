import {Router} from 'express'
import { createUser, getAllUsers, getUsersAndCompanies} from '../controllers/User.controller.js'

const userRouter = Router()

    userRouter.route("/users/new")
        .get(getAllUsers)
        .post(createUser)
        

    userRouter.route("/user/company")
        .get(getUsersAndCompanies)

export default userRouter