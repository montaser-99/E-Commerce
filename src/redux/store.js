import { createStore, combineReducers } from "redux";
import productReducer from "./reducer/productReducer";
import wishlistReducer from "./reducer/wishlistreducer";
import handleCart from "./reducer/handlecartreducer";

const rootReducer = combineReducers({
  products: productReducer,
  wishlist: wishlistReducer,
  cart: handleCart,
});

const store = createStore(rootReducer);

export default store;
