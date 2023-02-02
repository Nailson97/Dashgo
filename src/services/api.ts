import axios from "axios"

export const api = axios.create({
  baseURL:'htts://localhost:3000/api'
})