import axios from 'axios'

const API_URL = 'http://localhost:5000/api/review/'




// get newProducts
const addProductReview = async (data) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if(userInfo === null){
      throw new Error("you must Login In to add a Review")
    }else{
      const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const reviews = await axios.post(API_URL+'add',data,config)
    return reviews.data;
    }
}

// get newProducts
const getAllProductReviews = async (idProduct) => {
  const reviews = await axios.get(API_URL+'add',{params:{product:idProduct}})
  return reviews.data;
  
}



const reviewService = {
  addProductReview,
  getAllProductReviews
}

export default reviewService;