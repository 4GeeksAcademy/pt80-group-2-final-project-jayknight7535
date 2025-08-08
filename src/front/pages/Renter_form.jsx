import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImg from "../assets/img/signup-img.jpg";

export const RenterForm = () => {
  const navigate = useNavigate();

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
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "pets" || name === "criminal_record"
          ? value === "true" // radios return strings
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/renter/form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify(form),
        }
      );

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        console.error(data);
        alert(data.msg || "Failed to submit form");
        return;
      }

      navigate("/renters-dashboard");
    } catch (error) {
      console.error("submit error", error);
      alert("Could not submit. Check your network/server.");
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
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.5)",
      }}
    >
      <div className="container bg-white shadow p-4 rounded my-5" style={{ maxWidth: 600 }}>
        <h2 className="text-center mb-4">Renter Application Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Full name</label>
            <input
              className="form-control"
              name="user_name"
              value={form.user_name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone number</label>
            <input
              className="form-control"
              name="phone_number"
              value={form.phone_number}
              onChange={handleChange}
              placeholder="111 111 1111"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Desired zip code</label>
            <input
              className="form-control"
              name="zip_code"
              value={form.zip_code}
              onChange={handleChange}
              placeholder="00000"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Bedrooms needed</label>
            <input
              className="form-control"
              name="bedrooms"
              value={form.bedrooms}
              onChange={handleChange}
              placeholder="1"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Credit score</label>
            <input
              className="form-control"
              name="credit_score"
              value={form.credit_score}
              onChange={handleChange}
              placeholder="700"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Move-in date</label>
            <input
              type="date"
              className="form-control"
              name="move_in_date"
              value={form.move_in_date}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Do you have pets?</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="pets"
                id="petsYes"
                value="true"
                checked={form.pets === true}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="petsYes">Yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="pets"
                id="petsNo"
                value="false"
                checked={form.pets === false}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="petsNo">No</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Employment status</label>
            <input
              className="form-control"
              name="employment"
              value={form.employment}
              onChange={handleChange}
              placeholder="Employed / Self-employed / Student / Unemployed"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Yearly income</label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="number"
                className="form-control"
                name="income"
                value={form.income}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Criminal record?</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="criminal_record"
                id="recordYes"
                value="true"
                checked={form.criminal_record === true}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="recordYes">Yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="criminal_record"
                id="recordNo"
                value="false"
                checked={form.criminal_record === false}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="recordNo">No</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Need parking?</label>
            <input
              className="form-control"
              name="parking"
              value={form.parking}
              onChange={handleChange}
              placeholder="Yes / No / 1 spot"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Max budget</label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="number"
                className="form-control"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};