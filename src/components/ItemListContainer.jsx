import { useState, useEffect } from "react";
import {getProducts} from '../services';
import {useParams} from "react-router-dom";
import ItemList from './ItemList';




const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams ();

   
    
    useEffect(() => {
        console.log("useEffect", categoryId);
        getProducts(categoryId).then ((response) => {
            setItems(response);
        });
    }, [categoryId]);

    return <ItemList items= {items} />;
  
};



export default ItemListContainer;