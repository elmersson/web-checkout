import { useState, useEffect } from "react"
import { getPayments, makePayment } from "../api/payment.api"
import type { PaymentDto, CreatePaymentDto } from "../types/payment.types"

export function usePayments(loanId: string) {
  const [payments, setPayments] = useState<PaymentDto[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getPayments(loanId)
      .then(setPayments)
      .finally(() => setLoading(false))
  }, [loanId])

  const pay = async (data: CreatePaymentDto) => {
    const payment = await makePayment(loanId, data)
    setPayments((prev) => [...prev, payment])
    return payment
  }

  return { payments, loading, pay }
}
