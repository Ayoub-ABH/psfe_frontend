import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, {payload}) {
        const existingIndex = state.cartItems.findIndex(
            (item) => item._id === payload._id
          );
    
        if (existingIndex >= 0) {
            state.cartItems[existingIndex].cartQuantity +=1
            toast.info(`Increased ${payload.name.toUpperCase()} quantity`, {
                position: "bottom-left",
            });

        } else {
            let tempProductItem = { ...payload, cartQuantity: 1 };
            state.cartItems.push(tempProductItem);
            toast.success(`${payload.name.toUpperCase()} added to Cart`, {
                position: "bottom-left",
            });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, {payload}) {
        const itemIndex = state.cartItems.findIndex(
            (item) => item._id === payload._id
          );
    
          if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
    
            toast.info("Decreased product quantity", {
              position: "bottom-left",
            });
          } else if (state.cartItems[itemIndex].cartQuantity === 1) {
            const nextCartItems = state.cartItems.filter(
              (item) => item._id !== payload._id
            );
    
            state.cartItems = nextCartItems;
    
            toast.error("Product removed from cart", {
              position: "bottom-left",
            });
          }
    
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, {payload}) {
        const nextCartItems = state.cartItems.filter(
            (item) => item._id !== payload._id
          );

          state.cartItems = nextCartItems;

          toast.error(`${payload.name} removed from cart`, {
            position: "bottom-left",
          });
        
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      
    },
    clearCart(state) {
        state.cartItems = [];
        localStorage.removeItem("cartItems");
        toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;