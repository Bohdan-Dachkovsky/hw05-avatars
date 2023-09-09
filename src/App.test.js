import { render, screen } from "@testing-library/react";
import App from "./App.js";
import sum from "./sum";
import { picture } from "./products";

describe("App tests", () => {
  test("adds 1 + 2 to equal 3", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    expect(sum(1, 2)).toBe(3);
    expect(picture(2000, 1)).toBe(2024);
  });
});
