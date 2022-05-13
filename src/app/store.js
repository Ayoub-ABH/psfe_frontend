import { configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import productReducer from '../features/product/productSlice'


const store = configureStore({
    reducer:{
        users:userReducer,
        products:productReducer
    }
});



export default store;