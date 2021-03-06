import React, { Component, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import NewProduct from '../Components/Home/NewProduct'
import TopSelling from '../Components/Home/TopSelling'
import { getHomeProducts, reset } from '../features/product/productSlice';

const  Home  =() => {
	
    const dispatch = useDispatch()
	const {products,isSuccess,isError,message}= useSelector((state)=>state.products);
	
	useEffect(  () =>{
		if (isError) {
			toast.error(message)
		} 
	    dispatch(getHomeProducts());

	},[]) 

	

    return (
		
      <div>
          
		{/*<!-- SECTION shop-->*/}
		<div className="section">
			<div className="container">
				<div className="row">
    
					{/*<!-- shop -->*/}
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
							<img src="./img/shop01.png" alt="" />
							</div>
							<div className="shop-body">
							<h3>Laptop<br />Collection</h3>
							<Link to="/shop" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></Link>
							</div>
						</div>
					</div>

					{/*<!-- /shop -->*/}

					{/*!-- shop -->*/}
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
							<img src="./img/shop03.png" alt="" />
							</div>
							<div className="shop-body">
							<h3>Accessories<br />Collection</h3>
							<Link to="/shop" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></Link>
							</div>
						</div>
					</div>

					{/*<!-- /shop -->*/}

					{/*<!-- shop -->*/}
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
							<img src="./img/shop02.png" alt />
							</div>
							<div className="shop-body">
							<h3>Cameras<br />Collection</h3>
							<Link to="/shop" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></Link>
							</div>
						</div>
					</div>

					{/*<!-- /shop -->*/}
				</div>
			</div>
		</div>
		{/*!-- /SECTION shop-->*/}

	    


		

		{/* !-- /SECTION New Product-->*/}

		{ isSuccess  ? (<NewProduct  products={products.new} />) : (<></>)}
		
		{/* !-- /SECTION New Product-->*/}


		{/*<!-- HOT DEAL SECTION -->*/}
		<div id="hot-deal" className="section">
			<div className="container">
				<div className="row">
				<div className="col-md-12">
					<div className="hot-deal">
					<ul className="hot-deal-countdown">
						<li>
						<div>
							<h3>02</h3>
							<span>Days</span>
						</div>
						</li>
						<li>
						<div>
							<h3>10</h3>
							<span>Hours</span>
						</div>
						</li>
						<li>
						<div>
							<h3>34</h3>
							<span>Mins</span>
						</div>
						</li>
						<li>
						<div>
							<h3>60</h3>
							<span>Secs</span>
						</div>
						</li>
					</ul>
					<h2 className="text-uppercase">hot deal this week</h2>
					<p>New Collection Up to 50% OFF</p>
					<a className="primary-btn cta-btn" href="#">Shop now</a>
					</div>
				</div>
				</div>
			</div>
			</div>

		{/*<!-- /HOT DEAL SECTION -->*/}

		{/* !-- /SECTION New Product-->*/}
		{ isSuccess  ? (<NewProduct  products={products.new} />) : (<></>)}
		
		{/* !-- /SECTION New Product-->*/}

		{/* !-- /SECTION New Product-->*/}
		{ isSuccess  ? (<TopSelling  products={products.top}/>) : (<></>)}
		{/* !-- /SECTION New Product-->*/}



		
      </div>
    )
  
}

export default Home;
