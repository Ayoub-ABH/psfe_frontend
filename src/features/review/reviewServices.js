import axios from 'axios'

const API_URL = 'http://localhost:5000/api/review/'




// add a product review
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

// get  all product review
const getAllProductReviews = async (query) => {
  const reviews = await axios.get(API_URL+'all',{params:query})
  return reviews.data;
  
}

//delete a product review
const deleteProductReview = async (Review) => {
  const reviews = await axios.delete(API_URL+'delete',{params:Review})
  return reviews.data;
}



const reviewService = {
  addProductReview,
  getAllProductReviews,
  deleteProductReview
}

export default reviewService;