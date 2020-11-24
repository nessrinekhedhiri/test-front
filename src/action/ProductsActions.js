import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED } from "./types";
import axios from "axios";

// Get Product
export const getProduct = () => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get("https://api.mocki.io/v1/af37df01")
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PRODUCTS_FAILED,
        payload: err.response.msg,
      })
    );
};
