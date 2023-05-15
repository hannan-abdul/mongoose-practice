import express from "express";
import { createUser, getUserById, getUsers } from "./user.controller";
const router = express.Router();

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/create-user', createUser)

export default router;


// {
//     "id":"90",
//     "role":"studentsdssd",
//     "password":"1274ds",
//     "name":{
//        "firstName":"abdul1sdsd",
//        "middleName":"shohas",
//        "lastName":"hannan"
//     },
//     "dateOfBirth":"12/12/99",
//     "gender":"male",
//     "email":"abd@gmail.com",
//     "contactNo":"4444",
//     "emergencyContactNo":"5555",
//     "presentAddress":"Buffalo",
//     "permanentAddress":"Bangladesh"
//  }