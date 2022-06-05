import axios from 'axios'

const API_URL = 'http://localhost:5000/api/contact/'





// get  all contacts
const getAllContacts = async () => {
  const response = await axios.get(API_URL+'all')
  return response.data;
  
}

//delete a contact
const deleteContact = async (idContact) => {
  const response = await axios.delete(API_URL+'delete/'+idContact)
  return response.data;
}

// add a contact
const addContact = async (contact) => {
    const response = await axios.post(API_URL+'add',contact)
    return response.data;   
}






const contactService = {
  addContact,
  deleteContact,
  getAllContacts
}

export default contactService;