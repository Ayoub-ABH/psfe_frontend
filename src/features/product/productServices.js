import axios from 'axios'

const API_URL = 'http://localhost:5000/api/product/'




// get newProducts
const getNewProducts = async () => {
    const response = await axios.get(API_URL+'/home/newPrs')
    return response.data;
  }
  
// get Top Products
const getTopProducts = async () => {
    const response = await axios.post(API_URL+'/home/TopPrs')
    return response.data;
  }
  
  
  
  
  const productService = {
    getNewProducts,
    getTopProducts
  }
  
  export default productService;