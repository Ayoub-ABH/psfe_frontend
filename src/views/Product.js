import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProductDetail from '../Components/Product/ProductDetail'
import ProductTabs from '../Components/Product/ProductTabs'
import RelatedProds from '../Components/Product/RelatedProds'
import { getOneProduct } from '../features/product/productSlice';

function Product() {


  const { id } = useParams();  
  const dispatch = useDispatch();
	const {product,isSuccess,isError,message}= useSelector((state)=>state.products);
  

  useEffect(()=>{
    if(isError)
    toast.message(message)

    dispatch(getOneProduct(id));

  },[])
  
    return (
      <div>
            {/*<!-- SECTION -->*/}
            <div className="section">
                {/*<!-- container -->*/}
                <div className="container">
                    {/*<!-- row -->*/}
                    <div className="row">

                    {isSuccess ? (<ProductDetail product={product} />) : (<></>)}
                    {isSuccess ? (<ProductTabs product={product} />) : (<></>)}
                    
                    </div>
                    {/*<!-- /row -->*/}
                </div>
                {/*<!-- /container -->*/}
            </div> 
            <RelatedProds/>  
      </div>
    )
  
}


export default Product;
