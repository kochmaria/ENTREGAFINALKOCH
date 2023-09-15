import { useState , useEffect, useContext } from 'react';
import { getProduct } from '../services';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import CartContext from './context/CartContext';

const ItemDetailContainer = () => {
    const [ item, setItem] = useState (null);
    const {id} = useParams ();


    const { addItem } = useContext(CartContext)

    useEffect (() => {
        getProduct(id).then((response) => {
            setItem (response);
            
        }); 

    }, [id])


  return <ItemDetail item= {item} addItem= {addItem}/>;
};

export default ItemDetailContainer;