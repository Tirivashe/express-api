import { v4 as uuidv4 } from 'uuid'

let users = [
  {
    "id": uuidv4(),
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  },
  {
    "id": uuidv4(),
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv"
  },
  {
    "id": uuidv4(),
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
  },

  {
    "id": uuidv4(),
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org"
  }
]

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