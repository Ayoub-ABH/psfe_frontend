import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../../features/user/userSlice'
import { toast } from 'react-toastify'


function Register() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {name,email,password,password2} = userForm;


  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.users
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      navigate('/login')
    }
    dispatch(reset())

  }, [ isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setUserForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e)=> {
      e.preventDefault();

      if (password !== password2) {
        toast.error('Passwords do not match')
      } else {
        const userData = {
            name,
            email,
            password
        }
        dispatch(register(userData))
    }

  }

  return (
    <div>
      <div class="card rg">
        <div class="card-header">Register</div>
        <div class="card-body">
          <form onSubmit={onSubmit} role="form">
            <div class="form-group mb-2">
              <label htmlfor="">Name</label>
              <input
                className="input"
                type="text"
                class="input"
                onChange={onChange}
                name="name"
                placeholder="Email"
              />
            </div>

            <div class="form-group mb-2">
              <label htmlfor="">Email</label>
              <input
                className="input"
                type="email"
                class="input"
                onChange={onChange}
                name="email"
                placeholder="Email"
              />
            </div>

            <div class="form-group mb-2">
              <label htmlfor="">Password</label>
              <input
                className="input"
                type="password"
                class="input"
                onChange={onChange}
                name="password"
                placeholder="Pasword"
              />
            </div>

            <div class="form-group mb-2">
              <label htmlFor="">Retype Password</label>
              <input
                className="input"
                type="password"
                class="input"
                onChange={onChange}
                name="password2"
                placeholder="retype password"
              />
            </div>

            <button type="submit" class="btn btn-primary mb-2">
              Register
            </button>

            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
