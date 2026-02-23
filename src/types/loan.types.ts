// These types mirror the backend DTOs — the extractor detects
// when frontend and backend types diverge.

export enum EmploymentStatus {
  EMPLOYED = "EMPLOYED",
  SELF_EMPLOYED = "SELF_EMPLOYED",
  UNEMPLOYED = "UNEMPLOYED",
  RETIRED = "RETIRED",
  STUDENT = "STUDENT",
}

export enum LoanStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  ACTIVE = "ACTIVE",
  PAID_OFF = "PAID_OFF",
  DEFAULTED = "DEFAULTED",
}

export interface LoanApplicationDto {
  amount: number
  termMonths: number
  employmentStatus: EmploymentStatus
  applicantName: string
  applicantEmail: string
  annualIncome: number
  notes?: string
}

export type LoanResultDto = {
  approved: boolean
  loanId: string
  interestRate: number
  monthlyPayment: number
  rejectionReason?: string
}

export interface LoanDetailDto {
  id: string
  amount: number
  termMonths: number
  interestRate: number
  status: LoanStatus
  applicantName: string
  applicantEmail: string
  employmentStatus: EmploymentStatus
  createdAt: string
  updatedAt: string
}

export interface UpdateLoanDto {
  amount?: number
  termMonths?: number
  employmentStatus?: EmploymentStatus
  notes?: string
}
