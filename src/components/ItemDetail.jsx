import  { useState } from "react";
import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading, addItem }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(item, quantity);
    console.log(`Agregado al carrito: ${quantity} ${item.title}`);
  };

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, quantity + value);
    setQuantity(newQuantity);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <p>Stock: {item.stock}</p>
      <p>Categoría: {item.categoryId}</p>

      <div className="input-group">
        <button
          className="btn btn-dark"
          type="button"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <input
          type="text"
          className="form-control text-center"
          value={quantity}
          readOnly
        />
        <button
          className="btn btn-dark"
          type="button"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
      </div>

      <button
        className="btn btn-primary btn-block mt-3 btn-sm"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
};

export default ItemDetail;
