import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "./context/CartContext";
import { getCartQuantity } from "./utils";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const quantity = getCartQuantity(cart);

  const toggleCart = () => {
    setIsCartClicked(!isCartClicked);
  };

  return (
    <div>
      <div onClick={toggleCart} style={{ cursor: "pointer" }}>
        <i className="bi bi-cart" style={{ fontSize: "24px" }}></i>
        {!!quantity && quantity}
      </div>
      {isCartClicked && (
        <div>
          <ul>
            {/* Agrega aquí la lista de elementos del carrito */}
          </ul>
          <Link to="/Checkout">
            <button className="btn btn-primary">Ver mi carrito</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
