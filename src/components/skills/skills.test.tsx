import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("test for list elements", () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Redux"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders the list items correctly", () => {
    render(<Skills skills={skills} />);
    const listItemsElement = screen.getAllByRole("listitem");
    expect(listItemsElement).toHaveLength(skills.length + 1);
  });
});
