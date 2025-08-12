import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import signupImg from "../assets/img/signup-img.jpg";

export const RealtorSignup = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		dob: "",
		security_question: "",
        security_answer: "",
	});
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...form,
					is_agent: true, // this makes it so that when someone signs-up on this page the "IS_Agent model is always true "
				}),                 // user will not need to specify the page dose it for you ! 
			});

			const data = await res.json();

			if (!res.ok) {
				setError(data.msg || "Signup failed");
				return;
			}

			sessionStorage.setItem("token", data.token); /////// should store the token i hope 
			sessionStorage.setItem("user", JSON.stringify(data.user));

			setSuccess("Account created! ");
			navigate("/realtors-dashboard"); /// should hopfully take you to the dahboard once loged in , ( colloquially speaking ofc )
		} catch (err) {
			console.error(err);
			setError("Something went wrong");
		}
	};

	return (
		<div
			className="d-flex justify-content-center align-items-center pt-5"
			style={{
				backgroundImage: `url(${signupImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "100vh",
				boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)",
			}}
		>
			<div
				className="container bg-white shadow p-4 rounded"
				style={{ maxWidth: "500px" }}
			>
				<h2 className="text-center mb-4"> Agent Signup</h2>
				{error && <div className="alert alert-danger">{error}</div>}
				{success && <div className="alert alert-success">{success}</div>}

				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">Full Name</label>
						<input
							type="text"
							name="name"
							className="form-control"
							value={form.name}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="email" className="form-label">Email</label>
						<input
							type="email"
							name="email"
							className="form-control"
							value={form.email}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="password" className="form-label">Password</label>
						<input
							type="password"
							name="password"
							className="form-control"
							value={form.password}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="dob" className="form-label">Date of Birth</label>
						<input
							type="date"
							name="dob"
							className="form-control"
							value={form.dob}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="security_question" className="form-label">Security Question</label>
						<input type="text" name="security_question" className="form-control"
						placeholder="e.g., What is your pet's name?"
						value={form.security_question} onChange={handleChange} required />
					</div>

					<div className="mb-4">
						<label htmlFor="security_answer" className="form-label">Security Answer</label>
						<input type="text" name="security_answer" className="form-control"
						value={form.security_answer} onChange={handleChange} required />
					</div>

					<button type="submit" className="btn btn-success w-100">
						Sign Up as Realtor
					</button>
				</form>
			</div>
		</div>
	);
};