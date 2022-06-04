import axios from 'axios'

const API_URL = 'http://localhost:5000/api/order/'

const addOrder = async (order )=>{

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if(userInfo === null){
      throw new Error("you must Login In to place an Order")
    }else{
      const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
        },
      };
    const response = await axios.post(API_URL+"checkout",order,config);
    return response;
    }
}


//get all orders 
const getAllOrders = async()=>{
  const response = await axios.get(API_URL+"all");
  return response.data;
}


//get all orders 
const deleteOrder = async(idOrder)=>{
  const response = await axios.delete(API_URL+"delete/"+idOrder);
  return response.data;
}


//get order status
const updateOrderStatus = async(orderData)=>{
  const response = await axios.post(API_URL+"update/"+orderData.idOrder,{status:orderData.status});
  return response.data;
}


const orderService = {
    addOrder,
    getAllOrders,
    deleteOrder,
    updateOrderStatus
  }
  
  export default orderService;