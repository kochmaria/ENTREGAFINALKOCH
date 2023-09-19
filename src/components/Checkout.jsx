import { useContext, useState } from "react";
import CartContext from "./context/CartContext";
import { Link } from "react-router-dom";

import { getCartTotal, mapCartToOrdersItems } from "./utils";




import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../services";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);
  
  const total = getCartTotal(cart);

  const handleCheckout = () => {
    const order = {
      buyer: {
        name: "Pilar",
        numero: "12345678",
        email: "kochpilar99@gmail.com",
      },
      items: mapCartToOrdersItems(cart),
      total: total,
      date: serverTimestamp(),
    };

    setIsLoading(true);

    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading (false);
      clear ();
    });
  };
   





  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    setShowConfirmation(true);
  };

  return (
    <div>
      <h1>Resumen de compra</h1>

      {orderId && <p>El id de la orden es: {orderId}</p>}

      {!orderId && (
        <>
          <h3>Productos</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio por unidad: ${item.price}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <p>Total de la compra: ${total}</p>
          <Link to="/checkout">
            <button onClick={handleCheckout} className="btn btn-primary">
              Finalizar Compra
            </button>
            {isLoading && <p>Procesando compra...</p>}
          </Link>
        </>
      )}
      <div>
        <h2>Formulario de contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Apellido:
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Número de Teléfono:
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Mensaje de confirmación */}
          {showConfirmation && (
            <div className="alert alert-success mt-3">
              Tus datos se han guardado correctamente!
            </div>
          )}
          {/* Botón de Guardar */}
          {!showConfirmation && (
            <div className="mt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowConfirmation(true)}
              >
                Guardar
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Checkout;

