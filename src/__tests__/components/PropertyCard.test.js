import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

const onSaveProperty = () => {};
const userId = "123456";
test("renders correct title", () => {
  const data = {
    title: "Manchester Apt",
  };
  const { getByText } = render(
    <PropertyCard
      data={data}
      onSaveProperty={onSaveProperty}
      userId={userId}
      index={1}
    />,
  );

  expect(getByText(/Manchester/).textContent).toBe("Manchester Apt");
});

test("renders correct type", () => {
  const data = {
    type: "Flat",
  };

  const { getByText } = render(
    <PropertyCard
      data={data}
      onSaveProperty={onSaveProperty}
      userId={userId}
      index={1}
    />,
  );

  expect(getByText(/Flat/).textContent).toBe("Flat");
});

test("renders correct bathroom number", () => {
  const data = {
    bathrooms: 1,
  };

  const { getByText } = render(
    <PropertyCard
      data={data}
      onSaveProperty={onSaveProperty}
      userId={userId}
      index={1}
    />,
  );

  expect(getByText(/1/).textContent).toBe("1");
});

test("renders correct bedroom number", () => {
  const data = {
    bedrooms: 3,
  };

  const { getByText } = render(
    <PropertyCard
      data={data}
      onSaveProperty={onSaveProperty}
      userId={userId}
      index={1}
    />,
  );

  expect(getByText(/3/).textContent).toBe("3");
});

test("renders correct price", () => {
  const data = {
    price: 15000,
  };

  const { getByText } = render(
    <PropertyCard
      data={data}
      onSaveProperty={onSaveProperty}
      userId={userId}
      index={1}
    />,
  );

  expect(getByText(/15000/).textContent).toBe("15000");
});

test("renders correct city", () => {
  const data = {
    city: "Manchester",
  };

  const { getByText } = render(
    <PropertyCard
      data={data}
      onSaveProperty={onSaveProperty}
      userId={userId}
      index={1}
    />,
  );

  expect(getByText(/Manchester/).textContent).toBe("Manchester");
});

test("email link has correct href value", () => {
  const data = {
    email: "tugcanozaktas51@gmail.com",
  };

  const { getByText } = render(
    <PropertyCard
      data={data}
      onSaveProperty={onSaveProperty}
      userId={userId}
      index={1}
    />,
  );

  const emailLink = getByText(/E-mail/);

  expect(emailLink.getAttribute("href")).toBe(`mailto:${data.email}`);
});

test("renders everything correctly", () => {
  const data = {
    title: "Manchester Flat City Center",
    type: "Flat",
    bathrooms: 1,
    bedrooms: 3,
    price: 25000,
    city: "Manchester",
    email: "tugcanozaktas51@gmail.com",
  };

  const { asFragment } = render(
    <PropertyCard
      data={data}
      onSaveProperty={onSaveProperty}
      userId={userId}
      index={1}
    />,
  );

  expect(asFragment()).toMatchSnapshot();
});
