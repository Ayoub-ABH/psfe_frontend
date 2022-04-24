import React from 'react'

export default function Footer() {
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
										<a href="#"><i className="fa fa-facebook" /></a>
									</li>
									<li>
										<a href="#"><i className="fa fa-twitter" /></a>
									</li>
									<li>
										<a href="#"><i className="fa fa-instagram" /></a>
									</li>
									<li>
										<a href="#"><i className="fa fa-pinterest" /></a>
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
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
									<ul className="footer-links">
										<li><a href="#"><i className="fa fa-map-marker" />1734 Stonecoal Road</a></li>
										<li><a href="#"><i className="fa fa-phone" />+021-95-51-84</a></li>
										<li><a href="#"><i className="fa fa-envelope-o" />email@email.com</a></li>
									</ul>
								</div>
							</div>
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Categories</h3>
									<ul className="footer-links">
										<li><a href="#">Hot deals</a></li>
										<li><a href="#">Laptops</a></li>
										<li><a href="#">Smartphones</a></li>
										<li><a href="#">Cameras</a></li>
										<li><a href="#">Accessories</a></li>
									</ul>
								</div>
							</div>
							<div className="clearfix visible-xs" />
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Information</h3>
									<ul className="footer-links">
										<li><a href="#">About Us</a></li>
										<li><a href="#">Contact Us</a></li>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Orders and Returns</a></li>
										<li><a href="#">Terms &amp; Conditions</a></li>
									</ul>
								</div>
							</div>
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Service</h3>
									<ul className="footer-links">
										<li><a href="#">My Account</a></li>
										<li><a href="#">View Cart</a></li>
										<li><a href="#">Wishlist</a></li>
										<li><a href="#">Track My Order</a></li>
										<li><a href="#">Help</a></li>
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
									<li><a href="#"><i className="fa fa-cc-visa" /></a></li>
									<li><a href="#"><i className="fa fa-credit-card" /></a></li>
									<li><a href="#"><i className="fa fa-cc-paypal" /></a></li>
									<li><a href="#"><i className="fa fa-cc-mastercard" /></a></li>
									<li><a href="#"><i className="fa fa-cc-discover" /></a></li>
									<li><a href="#"><i className="fa fa-cc-amex" /></a></li>
								</ul>
								<span className="copyright">
									<a target="_blank" href="#">AIT BABA HAMOU Ayoub © 2022</a>
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
