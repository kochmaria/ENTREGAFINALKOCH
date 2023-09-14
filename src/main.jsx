import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import App from './App.jsx';


import './app.css'

const firebaseConfig = {
  apiKey: "AIzaSyAa7RhApst36bnWJfiVejRufLcgAONtDtg",
  authDomain: "tienda-34162.firebaseapp.com",
  projectId: "tienda-34162",
  storageBucket: "tienda-34162.appspot.com",
  messagingSenderId: "1096522594693",
  appId: "1:1096522594693:web:636112a6652fbd71616cec"
};

initializeApp(firebaseConfig);

console.log("inicializando mi app")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
     <App/>
    </BrowserRouter>
  </React.StrictMode>,
);
