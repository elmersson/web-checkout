import React, { useEffect, useState } from "react"
import { getLoans } from "../api/loan.api"
import type { LoanDetailDto } from "../types/loan.types"

export function LoanList() {
  const [loans, setLoans] = useState<LoanDetailDto[]>([])

  useEffect(() => {
    getLoans().then(setLoans)
  }, [])

  return (
    <div>
      <h2>Your Loans</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan.id}>
            {loan.applicantName} - ${loan.amount} ({loan.status})
          </li>
        ))}
      </ul>
    </div>
  )
}
