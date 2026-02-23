import React, { useState } from "react"
import { makePayment } from "../api/payment.api"
import type { CreatePaymentDto, PaymentDto } from "../types/payment.types"
import { PaymentMethod } from "../types/payment.types"

export function PaymentForm({ loanId }: { loanId: string }) {
  const [payment, setPayment] = useState<PaymentDto | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data: CreatePaymentDto = {
      amount: 500,
      method: PaymentMethod.BANK_TRANSFER,
    }

    const result = await makePayment(loanId, data)
    setPayment(result)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Make Payment</h3>
      <button type="submit">Pay $500</button>
      {payment && <p>Payment {payment.id} processed</p>}
    </form>
  )
}
