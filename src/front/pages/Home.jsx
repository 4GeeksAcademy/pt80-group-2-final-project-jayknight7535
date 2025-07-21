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
						Start Prescreening
					</Link>
					<Link to="/login" className="btn btn-outline-light btn-lg mx-2 my-2">
						Agent Login
					</Link>
					<Link to="/renter-login" className="btn btn-outline-light btn-lg mx-2 my-2">
                     Renter Login
                    </Link>
				</div>
			</div>

			<section className="mt-5 container">
				<h2 className="text-center mb-4">How It Works</h2>
				<div className="row mt-4">
					<div className="col-md-4 mb-4">
						<h4>1. Fill Out a Quick Form</h4>
						<p>Tell us your income, credit score, and rental preferences.</p>
					</div>
					<div className="col-md-4 mb-4">
						<h4>2. Get a Score & Match</h4>
						<p>We show you apartments you qualify for, instantly.</p>
					</div>
					<div className="col-md-4 mb-4">
						<h4>3. Schedule a Viewing</h4>
						<p>Book a tour and receive confirmation by email or text.</p>
					</div>
				</div>
			</section>
		</>
	);
};
