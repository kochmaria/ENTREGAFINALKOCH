
import PropTypes from "prop-types";

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart-fill"></i>
      <span className="cart-count">{itemCount}</span>
    </div>
  );
};

CartWidget.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default CartWidget;
