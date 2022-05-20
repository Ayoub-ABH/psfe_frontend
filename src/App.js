import "./App.css";
import {  useEffect } from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Checkout from "./views/Checkout";
import Product from "./views/Product";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Cart from "./views/Cart";
import WishList from "./views/WishList";
import BreadCrumb from "./Components/Layouts/BreadCrumb";
import {  useSelector } from 'react-redux';
import Spinner from './Components/Layouts/Spinner';


function App() {

  useEffect(() =>{
		
		const script = document.createElement("script");
		script.src = "./js/main.js";
    script.async=true;
		document.body.appendChild(script);

	}) 

  const {isLoading } = useSelector(
    (state) =>state.products
  )
  

  return (
  <div className="App">
      <BrowserRouter>
          {isLoading? <Spinner/> : <></> }  
          <Header />
          <BreadCrumb/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/wishlist" element={<WishList/>} />
          </Routes>
        
          <Footer/>
      </BrowserRouter>
      <ToastContainer />
      </div>
    
  );
  
}

export default App;
