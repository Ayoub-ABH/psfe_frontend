import React, { useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addProduct, reset } from '../../features/product/productSlice';


const AddProduct = () => {

  const [fileData, setFileData] = useState();
  const [product,setProduct] = useState({
    name: "",
    description:"",
    details:"",
    brand: "",
    category: "",
    price: 0,
    quantity: 0,
    rating: 0,
    numReviews: 0,
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
    disptach(addProduct(data))
  };


  return (
    <div className="section mt-80">
      <div className="section-title admin-user-form">
        <h3 className="title">Add Product</h3>
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
                placeholder="details"
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
                placeholder="old-price"
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
            add product
           </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default AddProduct