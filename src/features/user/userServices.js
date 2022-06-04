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




//add user with picture
const addUser = async (userData) => {
  const data = new FormData();
  data.append("image", userData.fileData);
  data.append("name",userData.user.name)
  data.append("email",userData.user.email)
  data.append("password",userData.user.password)
  data.append("role",userData.user.role)

  const response = await axios.post(API_URL+'add',data,{
    headers:{ "Content-Type": "multipart/form-data" }
  })
  return response.data;
}



//get All users
const getAllUsers = async () => {
  const response = await axios.get(API_URL+"all");
  return response.data;
}

//delete  a user
const deleteUser = async (idUser) => {
  
  const response = await axios.delete(API_URL+"delete/"+idUser);
  return response.data;
}


const userService = {
    register,
    login,
    addUser,
    getAllUsers,
    deleteUser
  }

export default userService;