import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Navbar from "./Navbar"

describe ("Navbar", () => {
  it ("renders the page title", () => {
    render(<Navbar />)

    expect (
      screen.getByText("N1ghtfall")
    ).toBeInTheDocument()
  })
})