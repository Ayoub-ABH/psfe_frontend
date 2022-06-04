import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
  const {allUsers} = useSelector(state=>state.users)
  const {id} = useParams();
  const userInfo = allUsers.filter(user=>user._id===id)
  console.log(userInfo)

  return (
    <div className="section mt-80">
      <div className="section-title admin-user-form">
        <h3 className="title">Update User</h3>
      </div>

      

      <div className="admin-user-form">
        <form>

          <div className="form-group">
            
            <label>Name</label>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="name"
              value={userInfo[0].name}
              //onChange={handleInput}
            />
          </div>
          
          <div class="form-group">
          <label>Role</label>
              <select name="role" class="input" 
               value={userInfo[0].role}
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
          </div>
          
          <div className="form-group">
          <label>Email</label>
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Email"
              value={userInfo[0].email}

              //onChange={handleInput}
            />
          </div>
          <div className="form-group">
          <label>Password</label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="password"

              value={userInfo[0].password}

              //onChange={handleInput}
            />
          </div>

          <div className="form-group">
          <label>Image</label>
            <input
              type="file"
              name="image"

              //onChange={handleInput}
            />
          </div>
         

          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser