import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/img/hero-renters.jpg";
import { RentersInterestMap } from "../components/RentersInterestMap";

export const RealtorsDashboard = () => {
	const [forms, setForms] = useState([]);
	const [error, setError] = useState("");
	const [agentName, setAgentName] = useState("");

	useEffect(() => {
		const token = sessionStorage.getItem("token");

		const fetchForms = async () => {
			try {
				const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/agent/dashboard`, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});
				const data = await res.json();
				if (!res.ok) throw new Error(data.msg || "Something went wrong");
				console.log("Agent dashboard data:", data);
				setForms(data.forms);
				if (data.agent && data.agent.name) setAgentName(data.agent.name);
			} catch (err) {
				setError(err.message);
			}
		};

		fetchForms();
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
				<h1 className="display-4">Welcome back{agentName ? `, ${agentName}` : ""}!</h1>

				<h2 className="display-4">Review Your Renter Leads</h2>
				<p className="lead w-100 w-md-75">
					See all pre-qualified renter applications submitted through RentMatch.
				</p>
			</div>

			<section className="py-5 bg-light">
				<div className="container">
					<h2 className="text-center fw-bold mb-5" data-aos="fade-up">Submitted Applications</h2>
					{forms.length === 0 ? (
						<p className="text-center">No renter forms submitted yet.</p>
					) : (
						<div className="row row-cols-1 row-cols-md-2 g-4">
							{forms.map((form) => (
								<div className="col" key={form.id} data-aos="fade-up">
									<div className="p-4 bg-white rounded shadow-sm h-100">
										<h5 className="fw-bold text-primary">{form.user_name}</h5>
										<p className="mb-1"><strong>Email:</strong> {form.email}</p>
										<p className="mb-1"><strong>Income:</strong> ${form.income}</p>
										<p className="mb-1"><strong>Credit Score:</strong> {form.credit_score}</p>
										<p className="mb-1"><strong>Move-in Date:</strong> {form.move_in_date}</p>
										<p className="mb-0">
											<strong>Pets:</strong> {" "}
											<span className={`badge ${form.pets ? "bg-success" : "bg-secondary"}`}>
												{form.pets ? "Yes" : "No"}
											</span>
										</p>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</section>


			<section className="py-4 bg-primary text-white text-center mt-5" data-aos="zoom-in">
				<h4 className="mb-3">Ready to connect with matched renters?</h4>
				<Link to="/form" className="btn btn-light btn-lg">View New Matches</Link>
			</section>

			<section className="py-5 bg-white">
				<div className="container">
					<h2 className="text-center fw-bold mb-4"> Renter Hot Spots </h2>
					<RentersInterestMap />
				</div>
			</section>
		</>
	);
};
