import { api } from "../api/client"
import type { LoanDetailDto, LoanApplicationDto, LoanResultDto } from "../types/loan.types"

// Pattern 4: Custom wrapper functions calling axios
export async function submitLoanApplication(data: LoanApplicationDto): Promise<LoanResultDto> {
  const response = await api.post<LoanResultDto>("/loans/apply", data)
  return response.data
}

export async function fetchActiveLoansByStatus(status: string): Promise<LoanDetailDto[]> {
  const response = await api.get<LoanDetailDto[]>("/loans", {
    params: { status },
  })
  return response.data
}

// Pattern 1: fetch with DELETE
export async function cancelLoanApplication(loanId: string): Promise<void> {
  await fetch(`/api/v1/loans/${loanId}`, {
    method: "DELETE",
  })
}
