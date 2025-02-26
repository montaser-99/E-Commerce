
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { addCart } from '../redux/actions/CartActions.js';

const useAddToCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (item) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      toast.error("Please register to add items!", { duration: 2000 });
      setTimeout(() => {
        navigate("/register");
      }, 2000);
    } else {
      dispatch(addCart(item));
      toast.success(" Added to cart!", { duration: 2000 });
    }
  };
};

export default useAddToCart;
