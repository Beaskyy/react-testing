import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../../providers/app-provider";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />, {
      wrapper: AppProviders
    });
    const textElement = screen.getByRole("heading");
    expect(textElement).toHaveTextContent("dark mode");
  });
});
