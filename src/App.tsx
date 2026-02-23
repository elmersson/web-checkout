import React from "react"
import { LoanApplication } from "./components/LoanApplication"
import { LoanList } from "./components/LoanList"

export default function App() {
  return (
    <div>
      <h1>Loan Checkout</h1>
      <LoanList />
      <LoanApplication />
    </div>
  )
}
