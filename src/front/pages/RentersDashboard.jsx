import React, { useEffect, useState } from "react";
import heroImage from "../assets/img/hero-renters.jpg";
import { Link } from "react-router-dom";
import familyKeys from "../assets/img/family-keys.png";
import homeSearch from "../assets/img/home-search.png";
import moneyBag   from "../assets/img/money-bag.png";
import { RentalCard } from "../components/RentalCard";
import miami1 from "../assets/img/miami1.jpg";
import miami2 from "../assets/img/miami2.jpg";
import miami3 from "../assets/img/miami3.jpg";
import miami4 from "../assets/img/miami4.jpg";

export const RentersDashboard = () => {
	const [form, setForm] = useState(null);
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		const token = sessionStorage.getItem("token");

		const fetchDashboard = async () => {
			try {
				const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/renter/dashboard`, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});

				const data = await res.json();
				if (!res.ok) throw new Error(data.msg || "Something went wrong");

				setForm(data.form);
				setUser(data.user);
			} catch (err) {
				setError(err.message);
			}
		};

		fetchDashboard();
	}, []);

	if (error) return <div className="text-danger text-center mt-5">{error}</div>;

	const miniListings = [
		{
			id: 1,
			name: "Sunset Grove Apartments",
			location: "Mid-Beach, Miami",
			price: "$2,300/month",
			image: miami1,
			criteria: "Low",
			description: "Affordable mid-rise near shops and the beach."
		},
		{
			id: 2,
			name: "Oceanview Towers",
			location: "Brickell, Miami",
			price: "$3,100/month",
			image: miami2,
			criteria: "High",
			description: "Luxury tower with rooftop pool and ocean views."
		},
		{
			id: 3,
			name: "Palm Court Residences",
			location: "Wynwood, Miami",
			price: "$1,950/month",
			image: miami3,
			criteria: "Medium",
			description: "Trendy building near galleries and nightlife."
		},
		 {
			 id: 4, name: "Coral Bay Living", 
		     location: "Coral Gables",     
			 price: "$2,750/month", 
			 image: miami4, criteria: "Medium", 
			 description: "Spacious layouts with lush tropical landscaping."
			
		},
	];


	return (
		<>
			<div
				className="hero-section d-flex flex-column justify-content-center align-items-center text-white text-center"
				style={{
					backgroundImage: `url(${heroImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					minHeight: "50vh",
					padding: "3rem 1rem",
					boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.4)",
					textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)"
				}}
			>
				<h1 className="display-4">Welcome back{user?.name ? `, ${user.name}` : ""}!</h1>
				<p className="lead w-100 w-md-75">
					View your submitted rental application details below.
				</p>
			</div>

			<section className="py-5 bg-light">
				<div className="container">
					<h2 className="text-center fw-bold mb-5" data-aos="fade-up">Your Rental Application</h2>
					{!form ? (
						<p className="text-center">No form submitted yet.</p>
					) : (
						<div className="row justify-content-center">
							<div className="col-md-8" data-aos="fade-up">
								<div className="p-4 bg-white rounded shadow-sm">
									<p className="mb-1"><strong>Credit Score:</strong> {form.credit_score}</p>
									<p className="mb-1"><strong>Income:</strong> ${form.income}</p>
									<p className="mb-1"><strong>Move-in Date:</strong> {form.move_in_date}</p>
									<p className="mb-1"><strong>Pets:</strong> {form.pets ? "Yes" : "No"}</p>
									<p className="mb-1"><strong>Employment:</strong> {form.employment}</p>
									<p className="mb-1"><strong>Criminal Record:</strong> {form.criminal_record ? "Yes" : "No"}</p>
									<p className="mb-1"><strong>Parking:</strong> {form.parking}</p>
									<p className="mb-0"><strong>Budget:</strong> ${form.budget}</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>

			<section className="py-4 bg-primary text-white text-center mt-5" data-aos="zoom-in">
				<h4 className="mb-3">Need to update your information?</h4>
				<Link to="/renter-form" className="btn btn-light btn-lg">Edit Application</Link>
			</section>

			
			<section className="py-5 bg-light border-top">
				<div className="container">
					<h3 className="fw-bold mb-4">Recommended Listings</h3>
					<div className="d-flex gap-4 overflow-auto px-2" style={{ width: "100%", overflowX: "auto" }}>
					<div className="d-flex flex-nowrap gap-4">
						{miniListings.map((b) => (
						<RentalCard
							key={b.id}
							id={b.id}
							name={b.name}
							location={b.location}
							price={b.price}
							image={b.image}
							criteria={b.criteria}
							description={b.description}
						/>
						))}
					</div>
					</div>

					<div className="text-center mt-3">
					<Link to="/listings" className="btn btn-outline-primary">View All Listings</Link>
					</div>
				</div>
			</section>

			

			<section className="pt-4 p-3 "> 
				  <div class="row row-cols-1 row-cols-md-3 g-4">
					<div class="col">
						<div class="card h-100">
						<img src={familyKeys} class="card-img-top" alt="images stuff you know " style={{ height: 250, objectFit: "contain" }}/>
						<div class="card-body">
							<h5 class="card-title"> Connect with an Agent </h5>
							<p class="card-text"> Work with a real estate agent and every dollar is accounted for: earnest money, title and lender fees, prorated taxes, and more—so there are no surprises at closing. </p>
						</div>
							<Link to="/" className="btn btn-dark btn mx-5 m-4">
								Find an Agent 
							</Link>
						</div>
					</div>
					<div class="col">
						<div class="card h-100">
						<img src={moneyBag} class="card-img-top" alt="..." style={{ height: 250, objectFit: "contain" }}/>
						<div class="card-body">
							<h5 class="card-title"> Check Qualified loans  </h5>
							<p class="card-text"> No guesswork—just options. Compare loan matches on Credit Karma tailored to your profile, review estimated rates and terms, and choose the fit that works for your budget—all in one place.</p>
						</div>
							<Link to="https://www.creditkarma.com/lp/free-credit-scores-v12a?gclsrc=aw.ds&gad_source=1&gad_campaignid=15921637872&gbraid=0AAAAADrT-Vfzw8FrWE2uF1KX3B0wWQHmN&gclid=CjwKCAjwhuHEBhBHEiwAZrvdcvIMXcFiIj7FFAq7J07u1NGF71KdrTSu7vJLXNZ-yic6x251HwUYwRoCJqcQAvD_BwE" 
								className="btn btn-dark btn mx-5 m-4 ">
								Start Now 
							</Link>
						</div>
					</div>
					
					<div class="col">
						<div class="card h-100">
						<img  src={homeSearch} class="card-img-top" alt="..." style={{ height: 250, objectFit: "contain" }}/>
						<div class="card-body">
							<h5 class="card-title">Browse  listings  </h5>
							<p class="card-text"> Ready to look around? Discover nearby rentals, check availability, and book tours when you’re ready.</p>
						</div>
							<Link to="/listings" className="btn btn-dark btn mx-5 m-4">
								Veiw Local Listings
							</Link>
						</div>
					</div>
					</div>
			</section>

			<section className="py-5 bg-white text-center shadow " data-aos="fade-up"  data-aos-delay="200">
				<div className="container">
					<h4 className="fw-bold mb-3">Be The First To Know ! </h4>
					<p className="mb-4">Leave us your email and we’ll let you know when new listings or matches are available — Never miss a new Deal !</p>
					
					<form className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
					<i className="fas fa-envelope"></i>
					<input
						type="email"
						className="form-control w-75 w-md-50"
						placeholder="Enter your email address"
						required
					/>
					<button type="submit" className="btn btn-primary" >
						Notify Me
					</button>
					</form>
				</div>
			</section>
		</>
	);
};
