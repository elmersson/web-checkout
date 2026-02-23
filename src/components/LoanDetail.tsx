import React, { useEffect, useState } from "react"
import { getLoanById, deleteLoan } from "../api/loan.api"
import type { LoanDetailDto } from "../types/loan.types"

export function LoanDetail({ loanId }: { loanId: string }) {
  const [loan, setLoan] = useState<LoanDetailDto | null>(null)

  useEffect(() => {
    getLoanById(loanId).then(setLoan)
  }, [loanId])

  const handleDelete = async () => {
    await deleteLoan(loanId)
  }

  if (!loan) return <div>Loading...</div>

  return (
    <div>
      <h2>Loan Detail</h2>
      <p>Amount: ${loan.amount}</p>
      <p>Status: {loan.status}</p>
      <p>Rate: {loan.interestRate}%</p>
      <button onClick={handleDelete}>Cancel Loan</button>
    </div>
  )
}
