import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom/cjs/react-router-dom.min";
import App from "../components/App";

test("renders surreal estate title", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const title = screen.getByText(/Surreal Estate/i);
  expect(title).toBeInTheDocument();
});
