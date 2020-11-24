import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED } from "../action/types";

let initState = {
  ListProducts: [],
};

const ProductsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ListProducts: payload,
        errors: null,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};
export default ProductsReducer
