import React from 'react'

const AddProduct = () => {
  return (
    <div className="section mt-80">
      <div className="section-title admin-user-form">
        <h3 className="title">Add Product</h3>
      </div>

      <div className="admin-user-form">
        <form>

          <div className="col-lg-6">
            <div className="form-group">
              <label>Name</label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="name"
                //onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label>price</label>
              <input
                className="input"
                type="number"
                name="price"
                placeholder="price"
                //onChange={handleInput}
              />
            </div>     

            <div className="form-group">
              <label>quantity</label>
              <input
                className="input"
                type="number"
                name="quantity"
                placeholder="quantity"
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

          </div>

         <div className="col-lg-6">

            <div className="form-group">
              <label>description</label>
                <input
                  className="input"
                  type="text"
                  name="description"
                  placeholder="description"
                  //onChange={handleInput}
                />
            </div>

            <div className="form-group">
              <label>brand</label>
                <input
                  className="input"
                  type="text"
                  name="brand"
                  placeholder="brand"
                  //onChange={handleInput}
                 />
            </div>

            <div className="form-group">
              <label>old_price</label>
              <input
                className="input"
                type="number"
                name="old_price"
                placeholder="old-price"
                //onChange={handleInput}
              />
            </div>   

            
            
            <div className="form-group">
              <label>category</label>
              <input
                className="input"
                type="text"
                name="category"
                placeholder="category"
                //onChange={handleInput}
              />
            </div> 

            
         </div>
          
          <div className='nr-l'>
            <button type="submit" class="btn btn-primary">
            add product
           </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default AddProduct