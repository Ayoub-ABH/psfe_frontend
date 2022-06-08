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
import AddUser from "./Components/Admin/AddUser";
import UpdateUser from "./Components/Admin/UpdateUser";
import AddProduct from "./Components/Admin/AddProduct";
import UpdateProduct from "./Components/Admin/UpdateProduct";
import UpdateOrder from "./Components/Admin/UpdateOrder";
import Messages from "./views/Admin/Messages";
import Settings from "./views/Admin/Settings";
import UpdateSettings from "./Components/Admin/UpdateSettings";
import Contact from "./views/Contact";


function App() {

  const {isLoadingProduct } = useSelector(
    (state) =>state.products
  )
  const {isLoadingUser } = useSelector(
    (state) =>state.users
  )
  const {isLoadingSettings } = useSelector(
    (state) =>state.settings
  )

  const {isLoadingOrder } = useSelector(
    (state) =>state.orders
  )

  const {isLoadingContact } = useSelector(
    (state) =>state.contacts
  )


  const {isLoadingReview } = useSelector(
    (state) =>state.reviews
  )
  

  return (
  <div className="App">
      <BrowserRouter>
          {isLoadingProduct? <Spinner/>  : <></> } 
          {isLoadingUser? <Spinner/>  : <></> } 
          {isLoadingSettings? <Spinner/>  : <></> } 
          {isLoadingOrder? <Spinner/>  : <></> } 
          {isLoadingContact? <Spinner/>  : <></> } 
          {isLoadingReview? <Spinner/>  : <></> } 
          

          <Routes>
            <Route element={<UserLayouts/>}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop/>} />
              <Route path="/product/:id"  element={<Product/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/wishlist" element={<WishList/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/checkout-success" element={<CheckoutSuccess/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<NotFound/>} />
            </Route>

            <Route element={<AdminLayouts/>}>
              <Route path="/admin" element={<Admin/>}/>

              <Route path="/admin/users" element={<Users/>}/>
              <Route  path="/admin/users/add" element={<AddUser/>}/>
              <Route  path="/admin/users/update/:id" element={<UpdateUser/>}/>
                 

              <Route path="/admin/products" element={<Products/>}/>
              <Route  path="/admin/products/add" element={<AddProduct/>}/>
              <Route  path="/admin/products/update/:id" element={<UpdateProduct/>}/>

              <Route path="/admin/orders" element={<Orders/>}/>
              <Route  path="/admin/orders/update/:id" element={<UpdateOrder/>}/>

              <Route path="/admin/reviews" element={<Reviews/>}/>
              <Route path="/admin/messages" element={<Messages/>}/>

              <Route path="/admin/settings" element={<Settings/>}/>
              <Route path="/admin/settings/update/:id" element={<UpdateSettings/>}/>

              <Route path="/admin/*" element={<NotFound/>} />
              
            </Route>
          </Routes>
        
      </BrowserRouter>
      <ToastContainer />
      </div>
    
  );
  
}

export default App;
