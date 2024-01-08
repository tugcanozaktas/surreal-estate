/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool"];

function SideBar() {
  const [querySearch, setQuerySearch] = useState("");
  const navigate = useNavigate();
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  function handleSearch(event) {
    event.preventDefault();
    const newQuery = buildQueryString("query", {
      title: { $regex: querySearch },
    });
    navigate(`/properties${newQuery}`);
  }

  const handleFieldChange = (event) => {
    setQuerySearch(event.target.value);
  };

  return (
    <div className="sidebar">
      <div className="searchbar">
        <form onSubmit={handleSearch}>
          <input value={querySearch} onChange={handleFieldChange} type="text" />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      <div className="cities">
        <h2 className="filter-title">Filter by city</h2>
        {cities.map((city) => (
          <Link
            key={city}
            className="sidebar-city"
            to={buildQueryString("query", { city }, search)}
          >
            {city}
          </Link>
        ))}
      </div>
      <div className="sort-price">
        <h2 className="filter-title">Sort by price</h2>
        <Link
          className="asc-desc"
          to={buildQueryString("sort", { price: -1 }, search)}
        >
          Price Descending
        </Link>
        <Link
          className="asc-desc"
          to={buildQueryString("sort", { price: 1 }, search)}
        >
          Price Ascending
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
