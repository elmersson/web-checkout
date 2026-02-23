import { useState, useEffect } from "react"
import { getLoanById, updateLoan, deleteLoan } from "../api/loan.api"
import type { LoanDetailDto, UpdateLoanDto } from "../types/loan.types"

export function useLoan(loanId: string) {
  const [loan, setLoan] = useState<LoanDetailDto | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    getLoanById(loanId)
      .then(setLoan)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [loanId])

  const update = async (data: UpdateLoanDto) => {
    const updated = await updateLoan(loanId, data)
    setLoan(updated)
    return updated
  }

  const remove = async () => {
    await deleteLoan(loanId)
    setLoan(null)
  }

  return { loan, loading, error, update, remove }
}
