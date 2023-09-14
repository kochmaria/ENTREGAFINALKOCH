import { getFirestore, collection, addDoc , doc, updateDoc} from "firebase/firestore";
import {useState} from "react";

const Checkout = () => {
    const [orderId, setOrderId] = useState (null);
     
    const createOrder = () => {
      const order = {
        buyer: {
          Nombre: "Pilar",
          Numero: "12345678",
          email: "kochpilar99@gmail.com"
        },
        items: [
          {
            id: "HP1Z9hRVzZOhvxXwIX2N",
            title: "Headphones Bluetooth JBL",
            price: 400
          },
          {
            id: "R3oyBAamZOhsFVCbuV3w",
            title: "HeadPhones Bluetooth Marshal",
            price: 700
          },
          {
            id: "U89do9KpluN50IoM5vfX",
            title: "AirPods Pro",
            price: 500
          },
          {
            id: "jB4UBo5B6ShirA2fGXWU",
            title: "Headphones Noga",
            price: 350
          },
          {
            id: "p6ifqb2YylSGpf27LJif",
            title: "Marshal Inalambricos Black",
            price: 600
          },
          {
            id: "08",
            title: "Energy Sistem Earphones Sport 2 True Wireless",
            price: 150
          },
          {
            id: "07",
            title: "HUAWEII FreeBuds Pro 2",
            price: 300
          },
          {
            id: "05",
            price:270,
            title: "Auriculares Runner JBL",

          },
          {
            id: "04",
            title:"Headphones Smith",
            price:500,

          },
          {
            id:"03",
            title: "Razer Barracuda X",
            price: 500,

          },
          {
            id: "02",
            title: "Headphones Gamer Reddragon",

            price: 200,
          },
        ],
        total: 5850 // Asigna un valor a la propiedad total
      };
  
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
  
      addDoc(ordersCollection, order)
        .then((docRef) => {
          console.log("Orden creada con ID: ", docRef.id);
          setOrderId (docRef.id);
        })
        .catch((error) => {
          console.error("Error al crear la orden:", error);
        });
    };
  
    const updateOrder = () => {
        const db = getFirestore();
        const orderDoc = doc(db, "orders", orderId);
      
        updateDoc(orderDoc, { total: 2000 })
          .then(() => {
            console.log("Orden Actualizada");
            alert("Orden Actualizada");
          })
          .catch((error) => {
            console.error("Error al actualizar la orden:", error);
            alert("Error al actualizar la orden");
          });
      };
      
    return (
      <div>
         <h2>Checkout</h2>
         <button className="btn btn-primary" onClick={createOrder}>Crear Orden</button>
         {!! orderId && <p>Orden Creada con ID: {orderId} </p>}
         {!!orderId && <button className="btn btn-primary" onClick={updateOrder}>Actualizar Orden</button>}

       </div>
    );
};
  
export default Checkout;
  