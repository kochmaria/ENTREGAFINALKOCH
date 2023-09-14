import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore' ;

const ItemDetail = () => {

    const [item, setItem] = useState (null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect (() => {
        const db = getFirestore()
        
        const itemRef = doc( db, "items", "U89do9KpluN50IoM5vfX");

        setIsLoading(true)

        getDoc(itemRef).then(snapshot => {
            

            setIsLoading(false);
            if (snapshot.exists()) {
                setItem({
                    id: snapshot.id,
                    ...snapshot.data(),
                });
            } 
        });

        //console.log("itemRef", itemRef);

    }, [] );
    
//console.log("item" , item);

    return (
        <div>
            <h2>Item Detail</h2>

            {isLoading && <p>Cargando...</p>}


            {item && (
                <div>
                    <h3>Nombre: {item.title}</h3>
                    <p>ID: {item.id}</p>
                    
                    <p>Descripcion :{item.description}</p>
                    <p>Precio: ${item.price}</p>
                    
                </div>
            )}
        </div>
    )
}

export default ItemDetail;