import axios from "axios"
import type { AxiosError } from "axios"

export interface ApiError {
  status: number
  message: string
  code?: string
  details?: unknown
}

// Pattern 3: Axios instance with baseURL
export const api = axios.create({
  baseURL: "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15_000,
})

// Response interceptor for centralized error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; code?: string; details?: unknown }>) => {
    const apiError: ApiError = {
      status: error.response?.status ?? 0,
      message:
        error.response?.data?.message ??
        error.message ??
        "An unexpected error occurred",
      code: error.response?.data?.code ?? error.code,
      details: error.response?.data?.details,
    }

    if (apiError.status === 401) {
      // Handle unauthorized — could redirect to login
      console.error("[API] Unauthorized request:", apiError.message)
    }

    if (apiError.status === 403) {
      console.error("[API] Forbidden:", apiError.message)
    }

    if (apiError.status >= 500) {
      console.error("[API] Server error:", apiError.message)
    }

    return Promise.reject(apiError)
  },
)
