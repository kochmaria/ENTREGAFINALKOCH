import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";

const ItemList = ({ categoryId }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const db = getFirestore();
      const itemCollection = collection(db, "items");

      
      const q = query(itemCollection, where("categoryId", "==", categoryId));

      setIsLoading(true);

      try {
        const snapshot = await getDocs(q);

        const itemsFromSnapshot = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(itemsFromSnapshot);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching items: ", error);
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div className="container">
      <h2>Productos</h2>
      {isLoading && <p>Cargando...</p>}
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4" style={{ overflow: "hidden", height: "450px" }}>
            <Carousel interval={9000} style={{ backgroundColor: "grey", color: "white", height: "120%" }}>
              <Carousel.Item style={{ minHeight: "400px" }}>
                <img src={item.Image} alt={item.title} className="d-block w-100" />
                <Carousel.Caption style={{ textAlign: "center" }}>
                  <h2 style={{ fontSize: "24px", color: "white" }}>{item.title}</h2>
                  <p style={{ fontSize: "20px", color: "white" }}>Precio: ${item.price}</p>
                  <button className="btn btn-primary">Agregar al Carrito</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <p style={{ textAlign: "center", color: "white" }}>{item.description}</p>
              </Carousel.Item>
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  categoryId: PropTypes.string.isRequired, 
};

export default ItemList;

