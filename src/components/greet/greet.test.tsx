import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("renders hello correctly", () => {
    render(<Greet />);
    const testElement = screen.getByText(/hello/i);
    expect(testElement).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Beasky" />);
    const textElement = screen.getByText("Hello Beasky");
    expect(textElement).toBeInTheDocument();
  });
});
