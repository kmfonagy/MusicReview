import React from "react"
import { useFetch } from "react-async"

const User = ({ id }) => {
  const { username, error } = useFetch(`http://localhost:3000/getByUsername/{userName}`, {
    headers: { accept: "application/json" },
  })
  if (error) return error.message
  if (username) return `Hi, my name is ${username}!`
  return null
}

const userServices = () => {
  return <User id={1} />
}

export default userServices;