import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

const HomeComponent = Home.default || Home;

describe("Home", () => {
  test("visar huvudrubriken", () => {
    render(<HomeComponent />);
    expect(
      screen.getByRole("heading", { name: /välkommen till din bank/i })
    ).toBeInTheDocument();
  });

  test("visar knappen Skapa användare", () => {
    render(<HomeComponent />);
    expect(
      screen.getByRole("button", { name: /skapa användare/i })
    ).toBeInTheDocument();
  });
});
