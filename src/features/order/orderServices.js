import axios from 'axios'

const API_URL = 'http://localhost:5000/api/order/'

const addOrder = (order )=>{

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
    const response = axios.post(API_URL+"checkout",order,config);
    return response;
    }
}

const orderService = {
    addOrder
  }
  
  export default orderService;