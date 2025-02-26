const getInitialCart = () => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage", error);
      return [];
    }
  };
  

const handleCart = (state = getInitialCart(), action) => {
  let updatedCart;
  const product = action.payload;

  switch (action.type) {
      case "ADDITEM":
          const exist = state.find((x) => x.id === product.id);
          if (exist) {
              updatedCart = state.map((x) =>
                  x.id === product.id ? { ...x, qty: x.qty + 1 } : x
              );
          } else {
              updatedCart = [...state, { ...product, qty: 1 }];
          }
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return updatedCart;

      case "DELITEM":
          const exist2 = state.find((x) => x.id === product.id);
          if (exist2.qty === 1) {
              updatedCart = state.filter((x) => x.id !== exist2.id);
          } else {
              updatedCart = state.map((x) =>
                  x.id === product.id ? { ...x, qty: x.qty - 1 } : x
              );
          }
          localStorage.setItem("cart", JSON.stringify(updatedCart)); 
          return updatedCart;

          
          case "CLEAR_CART":
            return [];

      default:
          return state;
  }
};

export default handleCart;
