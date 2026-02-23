export enum ServiceStatus {
  UP = "UP",
  DOWN = "DOWN",
  DEGRADED = "DEGRADED",
}

export interface HealthCheckDto {
  status: ServiceStatus
  timestamp: string
  version?: string
  uptime?: number
}
