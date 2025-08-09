import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/img/hero-renters.jpg";
import signupImg from "../assets/img/signup-img.jpg";

export const ChooseRole = () => {
	const navigate = useNavigate();

	return (      
		<div
			className="d-flex justify-content-center align-items-center"
			style={{
				backgroundImage: `url(${signupImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "100vh",
				paddingTop: "100px",
				boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)", // dark overlay
			}}
		>
			<div
				className="container bg-white shadow p-4 rounded text-center"
				style={{ maxWidth: "500px" }}
			>
				<h2 className="mb-4">Welcome to RentMatch!</h2>
				<p className="mb-4">Please select your role:</p>
				<div className="d-flex justify-content-center gap-3">
					<button
						className="btn btn-outline-primary btn-lg w-50"
						onClick={() => navigate("/renters_signup")}
					>
						I am a Renter
					</button>
					<button
						className="btn btn-outline-success btn-lg w-50"
						onClick={() => navigate("/realtors_signup")}
					>
						I am an Agent
					</button>
				</div>
			</div>
		</div>
	);
};