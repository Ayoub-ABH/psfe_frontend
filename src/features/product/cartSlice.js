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
           
            if(payload.quantity <= 0 ||  payload.quantity === payload.cartQuantity )
            {
              toast.error(` reached the limit of quantity`, {
                position: "bottom-left",
              });
            }else{
              state.cartItems[existingIndex].cartQuantity +=1
              toast.info(`Increased ${payload.name.toUpperCase()} quantity`, {
                  position: "bottom-left",
              });
            }
            

        } else {          
          if(payload.quantity <= 0)
          {
            toast.error(` reached the limit of quantity`, {
              position: "bottom-left",
            });
          }else{
            let tempProductItem = { ...payload, cartQuantity: 1 };
            state.cartItems.push(tempProductItem);
            toast.success(`${payload.name.toUpperCase()} added to Cart`, {
                position: "bottom-left",
            });
          }
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, {payload}) {
        const itemIndex = state.cartItems.findIndex(
            (item) => item._id === payload._id
          );
    
          if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
            toast.info(`Decreased ${payload.name.toUpperCase()} quantity`, {
              position: "bottom-left",
            });
            
          } else if (state.cartItems[itemIndex].cartQuantity === 1) {
            const nextCartItems = state.cartItems.filter(
              (item) => item._id !== payload._id
            );
    
            state.cartItems = nextCartItems;
    
            toast.error(`${payload.name.toUpperCase()} removed from cart`, {
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
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
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