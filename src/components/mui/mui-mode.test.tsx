import { render, screen } from "../../test-utils";
import { MuiMode } from "./mui-mode";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />);
    const textElement = screen.getByRole("heading");
    expect(textElement).toHaveTextContent("dark mode");
  });
});
