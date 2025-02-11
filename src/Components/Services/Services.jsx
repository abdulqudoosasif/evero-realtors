// import serviceImage from "../../img/services.jpeg";

export default function Services() {
	return (
		<div className="services">
			<div className="services-intro">
				<p className="services-heading">Our Services</p>
				<p className="services-text">
					We offer comprehensive real estate solutions, whether you're looking to buy,
					sell, rent, or invest in properties. Our expert team ensures a seamless
					experience with professional guidance at every step.
				</p>
			</div>
			<div className="services-content">
				<div className="services-img">
					<img src={'https://images.pexels.com/photos/3195644/pexels-photo-3195644.jpeg?auto=compress&cs=tinysrgb&w=1200'} alt="Real Estate Services" />
				</div>
				<div className="service">
					<div>
						<p className="service-heading">Property Buying</p>
						<p className="service-text">
							Find your dream home with our extensive listings and expert consultation.
							We help you secure the best deals and navigate the buying process
							effortlessly.
						</p>
					</div>
					<div>
						<p className="service-heading">Property Selling</p>
						<p className="service-text">
							Sell your property quickly and at the best market price with our advanced
							marketing strategies and extensive buyer network.
						</p>
					</div>
					<div>
						<p className="service-heading">Property Rentals</p>
						<p className="service-text">
							Whether you're looking to rent out your property or find a rental home,
							we connect landlords and tenants seamlessly with our trusted rental
							services.
						</p>
					</div>
					<div>
						<p className="service-heading">Real Estate Investment</p>
						<p className="service-text">
							Maximize your returns with our expert investment advice. We provide
							valuable insights into profitable real estate opportunities.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
