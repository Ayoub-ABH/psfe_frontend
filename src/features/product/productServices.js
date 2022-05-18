import axios from 'axios'

const API_URL = 'http://localhost:5000/api/product/'




// get newProducts
const getHomeProducts = async () => {
    const resNewPrds = await axios.get(API_URL+'home/newPrs')
    const resTopPrds = await axios.get(API_URL+'home/TopPrs')
    return {new:resNewPrds.data,top:resTopPrds.data};
  }
  

// get all Products
const getAllProducts = async () => {
  const response = await axios.get(API_URL+'shop/allPrs')
  return response.data;
}

// get all Products
const getSomeProducts = async (query) => {
  const response = await axios.get(API_URL+'shop/allPrs',{params:query})
  return response.data;
}
  
  
  
  
  const productService = {
    getHomeProducts,
    getAllProducts,
    getSomeProducts
  }
  
  export default productService;