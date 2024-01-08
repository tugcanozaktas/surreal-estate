import React from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from "qs";

const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool"];

// adds query parameters to the current url basically
function buildQueryString(operation, valueObj) {
  const { search } = useLocation();
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };

  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
}

function SideBar() {
  return (
    <div className="sidebar">
      <div className="cities">
        <h2 className="filter-title">Filter by city</h2>
        {cities.map((city) => (
          <Link
            className="sidebar-city"
            to={buildQueryString("query", { city })}
          >
            {city}
          </Link>
        ))}
      </div>
      <div className="sort-price">
        <h2 className="filter-title">Sort by price</h2>
        <Link className="asc-desc" to={buildQueryString("sort", { price: -1 })}>
          Price Descending
        </Link>
        <Link className="asc-desc" to={buildQueryString("sort", { price: 1 })}>
          Price Ascending
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
