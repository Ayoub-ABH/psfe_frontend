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



//update user with picture
const updateUserProfile = async (data) => {
  const dataForm = new FormData();
  dataForm.append("image", data.fileData);
  dataForm.append("name",data.userInfo.name)
  dataForm.append("email",data.userInfo.email)
  dataForm.append("password",data.userInfo.password)

  const response = await axios.put(API_URL+'update/'+data.userInfo.id,dataForm,{
    headers:{ "Content-Type": "multipart/form-data" }
  })
  if(response.data)
  localStorage.setItem('userInfo', JSON.stringify(response.data))
  
  return response.data;
}


//update user from admin
//update user with picture
const updateUserFromAdmin = async (data) => {
  const dataForm = new FormData();
  dataForm.append("image", data.fileData);
  dataForm.append("name",data.userInfo.name)
  dataForm.append("role",data.userInfo.role)
  dataForm.append("email",data.userInfo.email)
  dataForm.append("password",data.userInfo.password)

  const response = await axios.put(API_URL+'updateFromAdmin/'+data.userInfo.id,dataForm,{
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
    deleteUser,
    updateUserProfile,
    updateUserFromAdmin
  }

export default userService;