import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import App from "./App.js";
import { sum } from "./sum";
import { picture } from "./products";
export const grand = picture.map((element) => element);
describe("App tests", () => {
  it("adds 1 + 2 to equal 3", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    expect(sum(1, 2)).toBe(3);
    expect(picture(2000, 1)).toBe(2024);
  });
});
