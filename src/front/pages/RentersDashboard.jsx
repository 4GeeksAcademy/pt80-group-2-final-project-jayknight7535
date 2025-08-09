import React, { useEffect, useState } from "react";
import heroImage from "../assets/img/hero-renters.jpg";
import { Link } from "react-router-dom";

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
		</>
	);
};
