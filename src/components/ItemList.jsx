import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa el componente Link

const ItemList = ({ categoryId }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const db = getFirestore();
      const itemCollection = collection(db, "items");

      let q;

      if (categoryId) {
        q = query(itemCollection, where("categoryId", "==", categoryId));
      } else {
        q = itemCollection; // Cargar todos los productos si no hay categoría especificada
      }

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
          <div key={item.id} className="col-md-4 mb-4" style={{ overflow: "hidden", height: "399px" }}>
            <Link to={`/item/${item.id}`}> {/* Enlace al detalle del producto */}
              <Carousel interval={9000} style={{ backgroundColor: "grey", color: "black", height: "120%" }}>
                <Carousel.Item style={{ minHeight: "100px" }}>
                  <img src={item.imageId} alt={item.title} className="d-block w-100" />
                  <Carousel.Caption style={{ textAlign: "bottom" }}>
                    <h2 style={{ fontSize: "24px", color: "white" }}>{item.title}</h2>
                    <p style={{ fontSize: "20px", color: "white" }}>Precio: ${item.price}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <p style={{ textAlign: "center", color: "white" }}>{item.description}</p>
                </Carousel.Item>
              </Carousel>
            </Link>
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
