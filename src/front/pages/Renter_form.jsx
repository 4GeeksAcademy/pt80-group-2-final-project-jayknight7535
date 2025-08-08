import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import signupImg from "../assets/img/signup-img.jpg";

export const RenterForm = () => {
    const navigate = useNavigate()

  const [form, setForm] = useState({
		email: "",
		user_name: "",
		phone_number: "",
		zip_code: "",
		bedrooms: "",
		credit_score: "",
		move_in_date: "",
		pets: false,
		employment: "",
		income: "",
		criminal_record: false,
		parking: "",
		budget: "",
	});

    const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm({ ...form, [name]: type === "checkbox" ? checked : value });
	};

    const handleSubmit = async(ev) => {
        ev.preventDefault();
        
        const token = sessionStorage.getItem("token");

       
		try {
			const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/renter/form`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify(form),
			});

			if (!resp.ok) {
				const data = await resp.json();
				console.error(data);
				alert("Failed to submit form");
				return;
			}

			navigate("/renters-dashboard");
		} catch (error) {
			console.error("error sopmthings wrong ", error);
		}
	};

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
				className="container bg-white shadow p-4 rounded rounded my-5"
				style={{ maxWidth: "600px" }}
			>
				<h2 className="text-center mb-4">Renter Application Form</h2>

				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input type="email" className="form-control" placeholder="name@example.com" />
					</div>
					<div className="mb-3">
						<label className="form-label">Full name</label>
						<input className="form-control" placeholder="John Doe" />
					</div>
					<div className="mb-3">
						<label className="form-label">Phone number</label>
						<input className="form-control" placeholder="111 111 1111" />
					</div>
					<div className="mb-3">
						<label className="form-label">Desired zip code</label>
						<input className="form-control" placeholder="00000" />
					</div>
					<div className="mb-3">
						<label className="form-label">Bedrooms needed</label>
						<input className="form-control" placeholder="1" />
					</div>
					<div className="mb-3">
						<label className="form-label">Credit score</label>
						<input className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Move-in date</label>
						<input className="form-control" placeholder="11/11/1111" />
					</div>
					<div className="mb-3">
						<label className="form-label">Do you have pets?</label><br />
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="pets" id="petsYes" />
							<label className="form-check-label" htmlFor="petsYes">Yes</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="pets" id="petsNo" />
							<label className="form-check-label" htmlFor="petsNo">No</label>
						</div>
					</div>
					<div className="mb-3">
						<label className="form-label">Employment status</label>
						<input className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Yearly income</label>
						<div className="input-group">
							<span className="input-group-text">$</span>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="mb-3">
						<label className="form-label">Criminal record?</label><br />
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="criminalRecord" id="recordYes" />
							<label className="form-check-label" htmlFor="recordYes">Yes</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="criminalRecord" id="recordNo" />
							<label className="form-check-label" htmlFor="recordNo">No</label>
						</div>
					</div>
					<div className="mb-3">
						<label className="form-label">Need parking?</label>
						<input className="form-control" />
					</div>
					<div className="mb-4">
						<label className="form-label">Max budget</label>
						<div className="input-group">
							<span className="input-group-text">$</span>
							<input type="text" className="form-control" />
						</div>
					</div>
					<button type="submit" className="btn btn-primary w-100">Submit</button>
				</form>
			</div>
		</div>
	);
};