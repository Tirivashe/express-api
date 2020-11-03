import express from 'express'
import { getUsers, addUser, deleteUser, editUser } from '../controllers/usersController.js'

const router = express.Router()

router.get('/', getUsers)
router.post('/', addUser)
router.delete('/:id', deleteUser)
router.patch('/:id', editUser)


export default router