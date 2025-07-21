import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/img/hero-renters.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL;

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file");

			const response = await fetch(backendUrl + "/api/hello");
			const data = await response.json();

			if (response.ok) dispatch({ type: "set_hello", payload: data.message });

			return data;
		} catch (error) {
			if (error.message) {
				throw new Error(
					`Could not fetch the message from the backend. Please check if the backend is running and the backend port is public.`
				);
			}
		}
	};

	useEffect(() => {
		loadMessage();
	}, []);

	return (
		<>
			<div
				className="hero-section d-flex flex-column justify-content-center align-items-center text-white text-center"
				style={{
					backgroundImage: `url(${heroImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					minHeight: "70vh",
					padding: "3rem 1rem",
					boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.4)", // dark overlay
					textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)", // readable text
				}}
			>
				<h1 className="display-4">Save Money Before You Apply</h1>
				<p className="lead w-100 w-md-75">
					Get pre-screened and matched to apartment communities that fit your qualifications — before spending non-refundable fees.
				</p>

				<div className="my-4 d-flex flex-wrap justify-content-center">
					<Link to="/form" className="btn btn-primary btn-lg mx-2 my-2">
						Get Matched with Rentals
					</Link>
					
				</div>
			</div>

			<section className="mt-5">
  <h2 className="text-center fw-bold mb-4" data-aos="fade-up">How It Works</h2>
  <div className="row text-center">
    <div className="col-md-4" data-aos="fade-up" data-aos-delay="0">
      <div className="p-4 shadow-sm rounded bg-white h-100">
        <i className="fas fa-file-alt fa-2x mb-3 text-primary"></i>
        <h4 className="fw-bold">Step 1: Share Your Info</h4>
        <p>Tell us your income, credit score, and rental preferences.</p>
      </div>
    </div>

    <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
      <div className="p-4 shadow-sm rounded bg-white h-100">
        <i className="fas fa-chart-line fa-2x mb-3 text-success"></i>
        <h4 className="fw-bold">Step 2: Instantly Get Matched</h4>
        <p>We show you apartments you qualify for, instantly.</p>
      </div>
    </div>

    <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
      <div className="p-4 shadow-sm rounded bg-white h-100">
        <i className="fas fa-calendar-check fa-2x mb-3 text-info"></i>
        <h4 className="fw-bold">Step 3: Book a Tour</h4>
        <p>Book a tour and receive confirmation by email or text.</p>
      </div>
    </div>
  </div>

  <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="600">
    <Link to="/form" className="btn btn-primary btn-lg">
      Get Started Now
    </Link>
  </div>
</section>



		</>
	);
};
