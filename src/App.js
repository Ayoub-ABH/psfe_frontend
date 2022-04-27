import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
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

class App extends Component {

  componentDidMount = () =>{
		
		const script = document.createElement("script");
		script.src = "./js/main.js";
    script.async=true;
		document.body.appendChild(script);
	}
  
  render() {
    return (
    <div className="App">
    
      <BrowserRouter>
        
            <Header />
            <BreadCrumb/>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/product" element={<Product/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/wishlist" element={<WishList/>} />
            </Routes>
          
            <Footer/>
        </BrowserRouter>
       </div>
      
    );
  }
}

export default App;
