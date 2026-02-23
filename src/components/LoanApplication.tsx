import React, { useState } from "react"
import { applyForLoan } from "../api/loan.api"
import type { LoanApplicationDto, LoanResultDto } from "../types/loan.types"
import { EmploymentStatus } from "../types/loan.types"

export function LoanApplication() {
  const [result, setResult] = useState<LoanResultDto | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const application: LoanApplicationDto = {
      amount: 10000,
      termMonths: 12,
      employmentStatus: EmploymentStatus.EMPLOYED,
      applicantName: "John Doe",
      applicantEmail: "john@example.com",
      annualIncome: 60000,
    }

    const res = await applyForLoan(application)
    setResult(res)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply for Loan</h2>
      {/* Form fields would go here */}
      <button type="submit">Submit Application</button>
      {result && (
        <div>
          {result.approved ? (
            <p>Approved! Loan ID: {result.loanId}</p>
          ) : (
            <p>Rejected: {result.rejectionReason}</p>
          )}
        </div>
      )}
    </form>
  )
}
