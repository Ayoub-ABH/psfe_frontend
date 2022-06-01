import React from 'react'

const UpdateSettings = () => {
  return (
    <div className="section mt-80">
      <div className="section-title admin-user-form">
        <h3 className="title">Update User</h3>
      </div>

      <div className="admin-user-form">
        <form>

          <div className="form-group">
            
            <label>phone</label>
            <input
              className="input"
              type="text"
              name="phone"
              placeholder="name"
              //onChange={handleInput}
            />
          </div>
          
          
          <div className="form-group">
          <label>Email</label>
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Email"
              //onChange={handleInput}
            />
          </div>
          <div className="form-group">
          <label>Address</label>
            <input
              className="input"
              type="password"
              name="address"
              placeholder="password"
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

export default UpdateSettings