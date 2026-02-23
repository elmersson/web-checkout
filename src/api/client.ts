import axios from "axios"

// Pattern 3: Axios instance with baseURL
export const api = axios.create({
  baseURL: "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
})
