import { useState , useEffect} from 'react';
import { getProduct } from '../services';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [ item, setItem] = useState (null);
    const {id} = useParams ();

    useEffect (() => {
        getProduct(id).then((response) => {
            setItem (response);
        }); 

    }, [id])


  return <ItemDetail item= {item} />;
};

export default ItemDetailContainer;