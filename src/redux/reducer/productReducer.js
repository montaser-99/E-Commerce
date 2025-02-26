// src/redux/productReducer.js

const initialState = {
  products: [],
  filter1: [],  // Initialize filter1 as an empty array
  filter2: []   // Initialize filter2 as an empty array
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload
      };
    case "SET_FILTER1":
      return {
        ...state,
        filter1: action.payload
      };
    case "SET_FILTER2":
      return {
        ...state,
        filter2: action.payload
      };
      case "SET_CATEGORY_FILTER":
        return {
            ...state,
            categoryFilter: action.payload, }
    default:
      return state;
  }
};

export default productReducer;
