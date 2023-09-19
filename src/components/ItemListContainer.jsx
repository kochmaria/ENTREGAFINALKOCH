import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      const db = getFirestore();
      const itemCollection = collection(db, 'items');

      const q = categoryId ? query(itemCollection, where('categoryId', '==', categoryId)) : itemCollection;

      try {
        const snapshot = await getDocs(q);

        const itemsFromSnapshot = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(itemsFromSnapshot);
      } catch (error) {
        console.error('Error fetching items: ', error);
      }
    };

    fetchItems();
  }, [categoryId]);

  return <ItemList categoryId={categoryId} items={items} />;
};

export default ItemListContainer;
