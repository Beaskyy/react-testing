import { render, screen } from "@testing-library/react"
import { Users } from "./users"

describe("Users", () => {
  test("render users correctly", () => {
    render(<Users />)
    const headingElement = screen.getByRole("heading", {
      name: "Users"
    })
    expect(headingElement).toBeInTheDocument()
  })

  test("render the list of all items", async() => {
    render(<Users />)
    const listElement = await screen.findAllByRole("listitem")
    expect(listElement).toHaveLength(3)
  })
})