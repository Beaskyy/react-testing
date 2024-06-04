import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import user from "@testing-library/user-event";

describe("counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking on the increment button", async () => {
    render(<Counter />);
    user.setup();
    const incrementButton = screen.getByRole("button");
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 when the button is clicked twice", async () => {
    user.setup()
    render(<Counter />)
    const incrementButtonElement = screen.getByRole("button")
    await user.dblClick(incrementButtonElement)
    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("2")
  })
});
