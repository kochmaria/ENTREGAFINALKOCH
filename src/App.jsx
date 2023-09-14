
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import "./App.css";
import Checkout from "./components/Checkout";

function App() {
  

  return (
    <div className="app-container">
      <Navbar  />
      <h1></h1>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Checkout />
    </div>
  );
}

export default App;

