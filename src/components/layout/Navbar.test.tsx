import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import Navbar from "./Navbar"

describe ("Navbar", () => {
  it ("renders the navbar", () => {
    render(<Navbar />)

    const navElement = screen.getByRole("navigation")

    expect(navElement).toBeInTheDocument()
  })

  it ("renders the discord link with the correct attributes", () => {
    render(<Navbar />)
    const discordLink = screen.getByRole("link", { name: /join discord/i })

    expect(discordLink).toBeInTheDocument()
    expect(discordLink).toHaveAttribute("href", "https://discord.gg/rQNh4gKG2p")
    expect(discordLink).toHaveAttribute("target", "_blank")
    expect(discordLink).toHaveAttribute("rel", "noopener noreferrer")
  })

  it ("displays the logo with the correct alt text", () => {
    render(<Navbar />)
    const logo = screen.getByAltText("Nightfall logo")

    expect(logo).toBeInTheDocument()
    expect(logo).toHaveClass("logo")
  })

  it ("shows the correct title text to screen readers", () => {
    render(<Navbar />)
    const h1 = screen.getByRole("heading", { level: 1 })

    expect(h1).toHaveAccessibleName("Nightfall")
  })
})