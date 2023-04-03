import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("Renders a heading", () => {
    render(<Home />);

    const titleValue = screen.getByRole("heading");
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveTextContent("Hello");
  });
});
