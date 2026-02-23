export enum PaymentMethod {
  BANK_TRANSFER = "BANK_TRANSFER",
  CREDIT_CARD = "CREDIT_CARD",
  DIRECT_DEBIT = "DIRECT_DEBIT",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export interface CreatePaymentDto {
  amount: number
  method: PaymentMethod
  reference?: string
}

export interface PaymentDto {
  id: string
  loanId: string
  amount: number
  method: PaymentMethod
  status: PaymentStatus
  processedAt: string
  reference?: string
}

export type PaymentSummaryDto = {
  totalPaid: number
  remainingBalance: number
  nextPaymentDue: string
  paymentCount: number
}
