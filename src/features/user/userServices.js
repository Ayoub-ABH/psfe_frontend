import axios from 'axios'

const API_URL = 'http://localhost:5000/api/user/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL+'register', userData)
  return response.data;
}

// login user
const login = async (userData) => {
  const response = await axios.post(API_URL+'login', userData)
  if (response.data) {
    if (response.data) {
      localStorage.setItem('userInfo', JSON.stringify(response.data))
    }
  }
  return response.data;
}




const userService = {
    register,
    login
  }

export default userService;