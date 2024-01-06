import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App";

test("renders surreal estate title", () => {
  render(
    <MemoryRouter initialEntries={["/properties"]}>
      <App />
    </MemoryRouter>,
  );
  const title = screen.getByText(/Surreal Estate/i);
  expect(title).toBeInTheDocument();
});
