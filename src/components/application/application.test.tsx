import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const headElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headElement).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name")
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("fullname")
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("beasky")
    expect(nameElement4).toBeInTheDocument();

    const closeElement = screen.getByTitle("close")
    expect(closeElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("a form to fill")
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
