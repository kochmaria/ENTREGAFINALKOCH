import { useContext } from "react";
import CartContext from "./context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const quantity = cart.length;

  return <div>CartWidget {quantity > 0 ? quantity : ""}</div>;
};

export default CartWidget;
