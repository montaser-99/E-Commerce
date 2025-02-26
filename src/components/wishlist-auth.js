
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { addToWishlist } from '../redux/actions/WishlistActions';


const useAddTowishlist = () => {
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
      dispatch(addToWishlist(item));
      toast.success(" Added to whishlist!", { duration: 2000 });
    }
  };
};

export default useAddTowishlist;
