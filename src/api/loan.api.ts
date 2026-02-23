import { api } from "./client"
import type {
  LoanApplicationDto,
  LoanResultDto,
  LoanDetailDto,
  UpdateLoanDto,
} from "../types/loan.types"

// Pattern 1: fetch() with method in options
export async function applyForLoanFetch(data: LoanApplicationDto): Promise<LoanResultDto> {
  const response = await fetch("/api/v1/loans/apply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  return response.json()
}

// Pattern 1: fetch() with GET (default method)
export async function getLoansListFetch(): Promise<LoanDetailDto[]> {
  const response = await fetch("/api/v1/loans")
  return response.json()
}

// Pattern 2: axios.METHOD() with generic type
export async function applyForLoan(data: LoanApplicationDto): Promise<LoanResultDto> {
  const response = await api.post<LoanResultDto>("/loans/apply", data)
  return response.data
}

// Pattern 3: axios instance .get with generic
export async function getLoans(): Promise<LoanDetailDto[]> {
  const response = await api.get<LoanDetailDto[]>("/loans")
  return response.data
}

// Pattern 3: axios instance .get with path param
export async function getLoanById(id: string): Promise<LoanDetailDto> {
  const response = await api.get<LoanDetailDto>(`/loans/${id}`)
  return response.data
}

// Pattern 3: axios instance .put
export async function updateLoan(id: string, data: UpdateLoanDto): Promise<LoanDetailDto> {
  const response = await api.put<LoanDetailDto>(`/loans/${id}`, data)
  return response.data
}

// Pattern 3: axios instance .delete
export async function deleteLoan(id: string): Promise<void> {
  await api.delete(`/loans/${id}`)
}
