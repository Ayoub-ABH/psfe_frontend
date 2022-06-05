import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { addContact, reset } from "../features/contact/contactSlice";
import { toast } from "react-toastify";

const Contact = () => {

  const {user} = useSelector(state=>state.users)
  const {message,isError,isSuccess} = useSelector(state=>state.contacts)
  const dispatch = useDispatch()

  const [settings,setSettings] = useState({
    name:user? user.name:"",
    email:user? user.email:"",
    objet:"",
    message:""
  })

  const handleInput = (e)=>{
    setSettings({
      ...settings,
      [e.target.name]:e.target.value
    })
  }

  useEffect(()=>{
    if(isError)
    toast.error(message)

    if(isSuccess)
    toast.success(message)

    dispatch(reset())
  },[message])

  const handleAddContact = (e)=>{
    e.preventDefault()
    dispatch(addContact(settings))
  }
  return (
    <div>
      <div class="cardcontact">
        <div class="card-header">contacter</div>
        <div class="card-body">
          <form role="form" onSubmit={handleAddContact}>
          {user? (
             <> 
              <div class="form-group mb-2">
                <label htmlfor="">Name</label>
                <input
                  className="input"
                  type="text"
                  onChange={handleInput}
                  name="name"
                  placeholder="Name"
                  value={user.name}
                  disabled
                />
              </div>

              <div class="form-group mb-2">
                <label htmlfor="">Email</label>
                <input
                  className="input"
                  type="email"
                  onChange={handleInput}
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  disabled
                />
              </div>
            </>
          ):(
            <> 
              <div class="form-group mb-2">
                <label htmlfor="">Name</label>
                <input
                  className="input"
                  type="text"
                  onChange={handleInput}
                  name="name"
                  placeholder="Name"
                />
              </div>

              <div class="form-group mb-2">
                <label htmlfor="">Email</label>
                <input
                  className="input"
                  type="email"
                  onChange={handleInput}
                  name="email"
                  placeholder="Email"
                />
              </div>
            </>
          )}
            

            <div class="form-group mb-2">
              <label htmlfor="">Objet</label>
              <input
                className="input"
                type="text"
                onChange={handleInput}
                name="objet"
                placeholder="objet"
              />
            </div>

            <div class="form-group mb-2">
              <label htmlFor="">message</label>

              <textarea
                name="message"
                onChange={handleInput}
                className="input"
                class="form-control"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary mb-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
