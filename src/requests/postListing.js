/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

const postListing = (postData, setAlert) => {
  const url = "http://localhost:4000/api/v1/PropertyListing";
  console.log(postData);
  axios
    .post(url, postData)
    .then(() => {
      setAlert({
        message: "Propery Added",
        isSuccess: true,
      });
    })
    .catch(() => {
      setAlert({
        message: "Server error. Please try again later",
        isSuccess: false,
      });
    });
};

export default postListing;
