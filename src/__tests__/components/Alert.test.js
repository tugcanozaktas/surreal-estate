import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

test("displays error message", () => {
  const { getByText, asFragment } = render(<Alert message="Error!" />);

  expect(getByText(/Error/).textContent).toBe("Error!");
  expect(asFragment()).toMatchSnapshot();
});

test("displays success message", () => {
  const { getByText, asFragment } = render(
    <Alert message="Success!!!" success />,
  );

  expect(getByText(/Success/).textContent).toBe("Success!!!");
  expect(asFragment()).toMatchSnapshot();
});

test("does not render if message is empty", () => {
  const { asFragment } = render(<Alert message="" />);
  const alert = asFragment();
  expect(alert).toMatchSnapshot();
});
