

export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });
  
  export const setFilter1 = (filter1) => ({
    type: 'SET_FILTER1',
    payload: filter1,
  });
  export const setCategoryFilter = (category) => {
    return {
        type: "SET_CATEGORY_FILTER",
        payload: category,
    };
};
  export const setFilter2 = (filter2) => ({
    type: 'SET_FILTER2',
    payload: filter2,
  });
  