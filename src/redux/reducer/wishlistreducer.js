const initialState = {
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  };
  
  const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        const itemExists = state.wishlist.some((item) => item.id === action.payload.id);
        if (!itemExists) {
          const updatedWishlist = [...state.wishlist, action.payload];
          localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
          return { ...state, wishlist: updatedWishlist };
        }
        return state;
  
      case "REMOVE_FROM_WISHLIST":
        const filteredWishlist = state.wishlist.filter((item) => item.id !== action.payload);
        localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
        return { ...state, wishlist: filteredWishlist };
  
      default:
        return state;
    }
  };
  
  export default wishlistReducer;
  