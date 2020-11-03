import { v4 as uuidv4 } from 'uuid'
import { users } from '../db.js'

export const getUsers = (req, res) => {
  res.send(users)
}

export const addUser = (req, res) => {
  const user = req.body
  const newUser = { id: uuidv4(), ...user }
  users.push(newUser)

  res.send("New user created")
}

export const deleteUser = (req, res) => {
  const { id } = req.params
  users = users.filter(user => user.id !== id)

  res.send(`User with id ${id} has been deleted`)
}

export const editUser = (req, res) => {
  const { name, username, email } = req.body
  const { id } = req.params

  const user = users.find(user => user.id === id)
  if(name) user.name = name
  if(username) user.username = username
  if(email) user.email = email

  res.send("user updated")
}