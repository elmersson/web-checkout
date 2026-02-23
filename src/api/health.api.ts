import { api } from "./client"
import type { HealthCheckDto } from "../types/health.types"

// Pattern 3: axios instance .get
export async function getHealth(): Promise<HealthCheckDto> {
  const response = await api.get<HealthCheckDto>("/health")
  return response.data
}

// Pattern 1: fetch() with GET (default method)
export async function getHealthFetch(): Promise<HealthCheckDto> {
  const response = await fetch("/api/v1/health")
  if (!response.ok) {
    throw new Error(`Health check failed: ${response.status} ${response.statusText}`)
  }
  return response.json()
}
