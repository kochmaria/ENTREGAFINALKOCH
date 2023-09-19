import  { useState, useEffect, useContext } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import CartContext from './context/CartContext';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const db = getFirestore();
        const productRef = doc(db, 'items', id);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          const productData = productSnapshot.data();
          setItem({
            id: productSnapshot.id,
            ...productData,
          });
        } else {
          console.error('El producto no existe');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return <ItemDetail item={item} addItem={addItem} />;
};

export default ItemDetailContainer;

