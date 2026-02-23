import { api } from "./client"
import type {
  CreatePaymentDto,
  PaymentDto,
  PaymentSummaryDto,
} from "../types/payment.types"

// Pattern 2/3: axios instance calls
export async function makePayment(loanId: string, data: CreatePaymentDto): Promise<PaymentDto> {
  const response = await api.post<PaymentDto>(`/loans/${loanId}/payments`, data)
  return response.data
}

export async function getPayments(loanId: string): Promise<PaymentDto[]> {
  const response = await api.get<PaymentDto[]>(`/loans/${loanId}/payments`)
  return response.data
}

export async function getPayment(loanId: string, paymentId: string): Promise<PaymentDto> {
  const response = await api.get<PaymentDto>(`/loans/${loanId}/payments/${paymentId}`)
  return response.data
}

// Pattern 1: fetch() for summary
export async function getPaymentSummary(loanId: string): Promise<PaymentSummaryDto> {
  const response = await fetch(`/api/v1/loans/${loanId}/payments/summary`)
  return response.json()
}
