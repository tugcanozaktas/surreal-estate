/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

const postListing = (postData) => {
  const url = "http://localhost:4000/api/v1/PropertyListing";
  console.log(postData);
  axios
    .post(url, postData)
    .then((response) => {
      console.log(`Response ${response.data}`);
    })
    .catch((error) => {
      console.error("Error", error.response);
    });
};

export default postListing;
