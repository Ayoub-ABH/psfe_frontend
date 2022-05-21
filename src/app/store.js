import { configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/product/cartSlice'
import reviewReducer from '../features/review/reviewSlice'


const store = configureStore({
    reducer:{
        users:userReducer,
        products:productReducer,
        cart:cartReducer,
        reviews:reviewReducer
    }
});



export default store;