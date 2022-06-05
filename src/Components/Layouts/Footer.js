import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const Footer = () => {

  const { allSettings } = useSelector((state) => state.settings);
 
  return (
	<div>
			{/*<!-- NEWSLETTER -->*/}
			<div id="newsletter" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="newsletter">
								<p>Sign Up for the <strong>NEWSLETTER</strong></p>
								<form>
									<input className="input" type="email" placeholder="Enter Your Email" />
									<button className="newsletter-btn"><i className="fa fa-envelope" /> Subscribe</button>
								</form>
								<ul className="newsletter-follow">
									<li>
										<Link to="/"><i className="fa fa-facebook" /></Link>
									</li>
									<li>
										<Link to="/"><i className="fa fa-twitter" /></Link>
									</li>
									<li>
										<Link to="/"><i className="fa fa-instagram" /></Link>
									</li>
									<li>
										<Link to="/"><i className="fa fa-pinterest" /></Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- /NEWSLETTER -->*/}

			{/*<!-- FOOTER -->*/}
			<footer id="footer">
				{/*<!-- top footer -->*/}
				<div className="section">
					<div className="container">
						<div className="row">
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">About Us</h3>
									<p>electro find your best electronic divices with great price.</p>
									{allSettings.map(setting=>
									<ul className="footer-links">
										<li><Link to="/"><i className="fa fa-map-marker" />{setting.address}</Link></li>
										<li><Link to="/"><i className="fa fa-phone" />{setting.phone}</Link></li>
										<li><Link to="/"><i className="fa fa-envelope-o" />{setting.email}</Link></li>
									</ul>
									)}
									
								</div>
							</div>
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Categories</h3>
									<ul className="footer-links">
										<li><Link to="/">Hot deals</Link></li>
										<li><Link to="/">Laptops</Link></li>
										<li><Link to="/">Smartphones</Link></li>
										<li><Link to="/">Cameras</Link></li>
										<li><Link to="/">Accessories</Link></li>
									</ul>
								</div>
							</div>
							<div className="clearfix visible-xs" />
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Information</h3>
									<ul className="footer-links">
										<li><Link to="/">About Us</Link></li>
										<li><Link to="/">Contact Us</Link></li>
										<li><Link to="/">Privacy Policy</Link></li>
										<li><Link to="/">Orders and Returns</Link></li>
										<li><Link to="/">Terms &amp; Conditions</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Service</h3>
									<ul className="footer-links">
										<li><Link to="/">My Account</Link></li>
										<li><Link to="/">View Cart</Link></li>
										<li><Link to="/">Wishlist</Link></li>
										<li><Link to="/">Track My Order</Link></li>
										<li><Link to="/">Help</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- /top footer -->*/}

				{/* <!-- bottom footer -->*/}
				<div id="bottom-footer" className="section">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<ul className="footer-payments">
									<li><Link to="/"><i className="fa fa-cc-visa" /></Link></li>
									<li><Link to="/"><i className="fa fa-credit-card" /></Link></li>
									<li><Link to="/"><i className="fa fa-cc-paypal" /></Link></li>
									<li><Link to="/"><i className="fa fa-cc-mastercard" /></Link></li>
									<li><Link to="/"><i className="fa fa-cc-discover" /></Link></li>
									<li><Link to="/"><i className="fa fa-cc-amex" /></Link></li>
								</ul>
								<span className="copyright">
									<span style={{color:'#D10024'}}>AIT BABA HAMOU Ayoub © 2022</span>
								</span>
							</div>
						</div>
					</div>
				</div>

				{/*<!-- /bottom footer -->*/}
			</footer>
			{/*<!-- /FOOTER -->*/}
		</div>
  )
}

export default Footer
