import { configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/product/cartSlice'


const store = configureStore({
    reducer:{
        users:userReducer,
        products:productReducer,
        cart:cartReducer
    }
});



export default store;