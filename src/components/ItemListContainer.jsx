import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      const db = getFirestore();
      const itemCollection = collection(db, "items");

      // Creamos una consulta (query) para filtrar los productos por la categoría
      const q = query(itemCollection, where("categoryId", "==", categoryId));

      try {
        const snapshot = await getDocs(q);

        const itemsFromSnapshot = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(itemsFromSnapshot);
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };

    if (categoryId) {
      fetchItems();
    }
  }, [categoryId]);

  return <ItemList categoryId={categoryId} items={items} />;
};

export default ItemListContainer;
