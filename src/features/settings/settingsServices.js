import axios from 'axios'

const API_URL = 'http://localhost:5000/api/settings/'





// get  all settings
const getAllSettings = async () => {
  const response = await axios.get(API_URL+'all')
  return response.data;
  
}


// add a settings
const updateSettings = async (data) => {
    const response = await axios.post(API_URL+'update/'+data.idSettings,{settings:data.settings})
    return response.data;   
}






const settingsService = {
  getAllSettings,
  updateSettings
}

export default settingsService;