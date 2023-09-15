import { useContext } from 'react';
import CartContext from './context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcula la cantidad total de productos en el carrito
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>CartWidget {itemCount}</div>
  );
};

export default CartWidget;
