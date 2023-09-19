
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import "./App.css";
import Checkout from "./components/Checkout";
import CartProvider from "./components/context/CartProvider";



function App() {
  
  
  return (
    <CartProvider>
      <Navbar  />
      
      <Routes>
        <Route path="/catalogo" element={<ItemListContainer />} />

        
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>

      
    </CartProvider>
    
  );
}

export default App;

