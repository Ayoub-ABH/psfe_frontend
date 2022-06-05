import { configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/product/cartSlice'
import reviewReducer from '../features/review/reviewSlice'
import orderReducer from '../features/order/orderSlice'
import contactReducer from '../features/contact/contactSlice'
import settingsReducer from '../features/settings/settingsSlice'


const store = configureStore({
    reducer:{
        users:userReducer,
        products:productReducer,
        cart:cartReducer,
        reviews:reviewReducer,
        orders:orderReducer,
        contacts:contactReducer,
        settings:settingsReducer
    }
});



export default store;