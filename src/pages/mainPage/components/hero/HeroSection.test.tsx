import { describe, expect, it } from "vitest"
import { screen, render } from "@testing-library/react"

import Hero from "./HeroSection"

describe ("hero", () => {
  it ("renders the hero", () => {
    render(<Hero />)

    const heroElement = screen.getByRole("region", { name: /Welcome to Nightfall/i })

    expect(heroElement).toBeInTheDocument()
  })

  it ("renders the h2 with the correct line break", () => {
    render(<Hero />)

    const h2 = screen.getByRole("heading", { level: 2 })

    expect(h2).toHaveTextContent(/we compete\.\s*we elevate\./i)
  })

  it ("renders the hero links with the correct hrefs", () => {
    render(<Hero />)

    const rosterLink = screen.getByRole("link", { name: /VIEW ROSTER/i })
  
    expect(rosterLink).toBeInTheDocument()
    expect(rosterLink).toHaveAttribute("href", "#roster")

    const scheduleLink = screen.getByRole("link", { name: /OUR SCHEDULE/i})
    
    expect(scheduleLink).toBeInTheDocument()
    expect(scheduleLink).toHaveAttribute("href", "#schedule")
  })
})