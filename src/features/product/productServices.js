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

// get one Products
const getOneProduct = async (id) => {
  const response = await axios.get(API_URL+id)
  return response.data;
}
  
const getAllProductsAdmin = async () => {
  const response = await axios.get(API_URL+'all/allPrds')
  return response.data;
}
  
const addProduct = async (productData) => {
  const data = new FormData();
 
  data.append("image", productData.fileData);
  data.append("name",productData.product.name);
  data.append("brand",productData.product.brand);
  data.append("category",productData.product.category);
  data.append("description",productData.product.description);
  data.append("details",productData.product.details);
  data.append("numReviews",productData.product.numReviews);
  data.append("old_price",productData.product.old_price);
  data.append("price",productData.product.price);
  data.append("quantity",productData.product.quantity);
  data.append("rating",productData.product.rating);

  const response = await axios.post(API_URL+'add/add',data,{
    headers:{ "Content-Type": "multipart/form-data" }
  })
  return response.data;
}

//update product 
const updateProduct = async (productData) => {
  const data = new FormData();
 
  data.append("image", productData.fileData);
  data.append("name",productData.product.name);
  data.append("brand",productData.product.brand);
  data.append("category",productData.product.category);
  data.append("description",productData.product.description);
  data.append("details",productData.product.details);
  data.append("old_price",productData.product.old_price);
  data.append("price",productData.product.price);
  data.append("quantity",productData.product.quantity);

  const response = await axios.put(API_URL+'update/'+productData.product.id,data,{
    headers:{ "Content-Type": "multipart/form-data" }
  })
  return response.data;
}

//delete  a user
const deleteProduct = async (idProduct) => {
  const response = await axios.delete(API_URL+"delete/"+idProduct);
  return response.data;
}
  
  const productService = {
    getHomeProducts,
    getAllProducts,
    getSomeProducts,
    getOneProduct,
    getAllProductsAdmin,
    addProduct,
    deleteProduct,
    updateProduct
  }
  
  export default productService;