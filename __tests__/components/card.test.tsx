import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "@/components/Card/card";
import "@testing-library/jest-dom";

describe("Components", () => {
  // const skills = [...]
  it("Card components renders correctly", () => {
    render(<Card />);
    // Ignore lower/uppercase
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    const cardMessage = screen.getByText(/my card/i);
    expect(cardMessage).toBeInTheDocument();

    const heading1 = screen.getByRole("heading", { level: 1 });
    expect(heading1).toBeInTheDocument();

    const customIdDiv = screen.getByTestId("custom-id");
    expect(customIdDiv).toBeInTheDocument();

    // const listItems = screen.getAllByRole("list-items");
    // expect(listItems).toHaveLength(skills.length);

    //queryBy =» fot not.toBeInTheDocument();
    //return null if no elements match

    //findBy => pl for fetched data

    // GET QUERY FIND
    //GET => alap
    //QUERY=> nincs benne
    //FIND => async return a promise

    // FIND => await
    //DEFAULT TIMEOUT OF 1000ms
    //{timeout:2000}
  });
});
