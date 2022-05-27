import "./App.css";
import {  useEffect } from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from "./views/Home";
import Shop from "./views/Shop";
import Checkout from "./views/Checkout";
import Product from "./views/Product";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Cart from "./views/Cart";
import WishList from "./views/WishList";
import {  useSelector } from 'react-redux';
import Spinner from './Components/Layouts/Spinner';
import NotFound from "./Components/Layouts/NotFound";
import CheckoutSuccess from "./Components/Order/CheckoutSuccess";
import Profile from "./views/Profile";
import UserLayouts from "./Components/Layouts/UserLayouts";
import AdminLayouts from "./Components/Layouts/Admin/AdminLayouts";
import Admin from "./views/Admin/Admin";
import Users from "./views/Admin/Users";
import Products from "./views/Admin/Products";
import Orders from "./views/Admin/Orders";
import Reviews from "./views/Admin/Reviews";


function App() {

  const {isLoading } = useSelector(
    (state) =>state.orders
  )
  

  return (
  <div className="App">
      <BrowserRouter>
          {isLoading? <Spinner/>  : <></> } 
          

          <Routes>
            <Route element={<UserLayouts/>}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/product/:id"  element={<Product/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/wishlist" element={<WishList/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/checkout-success" element={<CheckoutSuccess/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="*" element={<NotFound/>} />
            </Route>

            <Route element={<AdminLayouts/>}>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/admin/users" element={<Users/>}/>
              <Route path="/admin/products" element={<Products/>}/>
              <Route path="/admin/orders" element={<Orders/>}/>
              <Route path="/admin/reviews" element={<Reviews/>}/>
              
            </Route>
          </Routes>
        
      </BrowserRouter>
      <ToastContainer />
      </div>
    
  );
  
}

export default App;
