import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {addToCart ,removeFromCart} from "../Redux/Slice/CartSlice";
import { useMemo } from "react";

const Product = ({item}) => {

  const cart = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();

  const memoizedCart = useMemo(() => cart, [cart]);


  const add = (item) => {
    dispatch(addToCart(item));
    toast.success("Item added to Cart");
  };

  const remove = (item) => {
    dispatch(removeFromCart(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border-2 border-slate-300 shadow-lg">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} alt="cart" className="h-full w-full " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </div>
        
        {
          memoizedCart.some((p) => p.id === item.id) ?
          (<button
            onClick={() => remove(item)}
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          >
            Remove Item
          </button>) :
          (<button
            onClick={() => add(item)}
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          >
            Add to Cart
          </button>)
        }
      </div>
     

    </div>
  );
};

export default Product;
