import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { login, reset } from '../../features/user/userSlice';




function Login() {
    const [userForm,setUserForm] = useState({
      email:"",
      password:""
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.users
    )

    const onchange = (e)=>{
       setUserForm({
         ...userForm,
         [e.target.name]:e.target.value
       })
    }

    useEffect(()=>{
      if (isError) {
        toast.error(message)
      } 

      if (isSuccess ) {
        navigate('/')   
      }

      dispatch(reset())
    },[user,isError, isSuccess])


    const onsubmit = (e)=>{
      e.preventDefault();
      dispatch(login(userForm))
    }
  
    return (
      <div>
       
       <div class="card">

        <div class="card-header">
           Login
        </div>
        <div class="card-body">
            
            <form onSubmit={onsubmit} role="form">
                
            
                <div class="form-group mb-2">
                    <label htmlfor="email">Email</label>
                    <input type="text" class="input" name='email' onChange={onchange} placeholder="Email"/>
                </div>

                <div class="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" class="input" name='password' onChange={onchange} placeholder="password"/>
                </div>
                
            
                <button type="submit" class="btn btn-primary mb-2">Login</button>
                 <div className="mb-1">
                     <a href="">Forgot Password?</a>
                     <Link className="nr-l" to="/register">Not registred</Link>
                </div>
                 
            </form>
            
        </div>


       </div>
       
      </div>
    )
}
export default Login;

