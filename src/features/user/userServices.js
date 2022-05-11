import axios from 'axios'

const API_URL = 'http://localhost:5000/api/user/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL+'register', userData)
  return response.data;
}


const userService = {
    register,
  }

export default userService;