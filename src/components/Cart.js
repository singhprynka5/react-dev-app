import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length ? (
          <button
            className="m-2 p-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        ) : null}
        {cartItems.length === 0 ? (
          <h1 className="p-4 font-medium">
            Cart is Empty. Add Items to the Cart.
          </h1>
        ) : (
          <ItemsList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
