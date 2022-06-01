import React from 'react'

const UpdateOrder = () => {
  return (
    <div className="section mt-80">
      <div className="section-title admin-user-form">
        <h3 className="title">Update Order</h3>
      </div>

      <div className="admin-user-form">
        <form>
          
          <div class="form-group">
          <label>Status</label>
              <select name="role" class="input">
                <option value="admin">Pending</option>
                <option value="user">Validated</option>
                <option value="user">Delivred</option>
                <option value="user">Cancled</option>
              </select>
          </div>
          
        

          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateOrder