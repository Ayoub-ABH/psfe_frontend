import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { reset, updateProduct } from '../../features/product/productSlice';

const UpdateProduct = () => {
  const [fileData, setFileData] = useState();
  const {id} = useParams()
  const [product,setProduct] = useState({
    id:id,
    name: "",
    description:"",
    details:"",
    brand: "",
    category: "",
    price: 0,
    quantity: 0,
  });

  const disptach = useDispatch()
  const navigate = useNavigate()
  const {isError,isSuccess,message}=useSelector(state => state.products)




  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };
  const handleInput = (e)=> {
    setProduct({
      ...product,
      [e.target.name]:e.target.value
    })
  }

  useEffect(()=>{
    if(isError)
    toast.error(message)

    if(isSuccess) {
      toast.success(message)
      navigate("/admin/products")
    }

    disptach(reset())
  },[message])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data ={fileData,product}
    console.log(data)
    disptach(updateProduct(data))
  };



  return (
    <div className="section mt-80">
      <div className="section-title admin-user-form">
        <h3 className="title">Update Product</h3>
      </div>

      <div className="admin-user-form">
        <form onSubmit={onSubmitHandler}>

          <div className="col-lg-6">
            <div className="form-group">
              <label>Name</label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="name"
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label>price</label>
              <input
                className="input"
                type="number"
                name="price"
                placeholder="price"
                onChange={handleInput}
              />
            </div>     

            <div className="form-group">
              <label>quantity</label>
              <input
                className="input"
                type="number"
                name="quantity"
                placeholder="quantity"
                onChange={handleInput}
              />
            </div>  
             <div className="form-group">
              <label>details</label>
              <input
                className="input"
                type="text"
                name="details"
                placeholder="quantity"
                onChange={handleInput}
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
                  onChange={handleInput}
                />
            </div>

            <div className="form-group">
              <label>brand</label>
                <input
                  className="input"
                  type="text"
                  name="brand"
                  placeholder="brand"
                  onChange={handleInput}
                 />
            </div>

            <div className="form-group">
              <label>old_price</label>
              <input
                className="input"
                type="number"
                name="old_price"
                placeholder="old_price"
                onChange={handleInput}
              />
            </div>   

            
            
            <div className="form-group">
              <label>category</label>
              <input
                className="input"
                type="text"
                name="category"
                placeholder="category"
                onChange={handleInput}
              />
            </div> 

            <div className="form-group">
            <label>Image</label>
              <input
                type="file"
                name="image"
                onChange={fileChangeHandler}
              />
            </div>

            
         </div>
          
          <div className='nr-l'>
            <button type="submit" class="btn btn-primary">
            update product
           </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct