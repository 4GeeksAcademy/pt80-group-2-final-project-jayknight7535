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




<section className="py-5 bg-light" data-aos="fade-up">
  <div className="container">
    <h3 className="text-center mb-4 fw-bold">Frequently Asked Questions</h3>
    
    <div className="mb-4">
      <h5 className="fw-semibold">Is RentMatch free?</h5>
      <p>Yes! RentMatch is completely free for renters. No hidden fees, ever.</p>
    </div>

    <div className="mb-4">
      <h5 className="fw-semibold">Will this affect my credit score?</h5>
      <p>Nope — we don’t run a hard credit check. We only use the info you provide to estimate your match.</p>
    </div>

    <div className="mb-4">
      <h5 className="fw-semibold">How accurate are the matches?</h5>
      <p>We use the same filters property managers use — things like income, credit, and location. It's not perfect, but it's really close.</p>
    </div>

    <div className="mb-4">
      <h5 className="fw-semibold">Can I schedule a tour through RentMatch?</h5>
      <p>Yes! Once matched, you’ll be able to request a tour and get confirmation via email or text.</p>
    </div>
  </div>
</section>

<section className="py-5 bg-white" data-aos="fade-up">
  <div className="container text-center">
    <h3 className="fw-bold mb-4">Why RentMatch?</h3>
    <div className="row g-4">
      <div className="col-md-4">
        <i className="fas fa-wallet fa-2x mb-3 text-primary"></i>
        <h5>No Application Fees</h5>
        <p>We match you before you pay anything. Save money on apps that won’t get approved.</p>
      </div>
      <div className="col-md-4">
        <i className="fas fa-clock fa-2x mb-3 text-primary"></i>
        <h5>Instant Results</h5>
        <p>Know which apartments you're qualified for in seconds. No waiting. No surprises.</p>
      </div>
      <div className="col-md-4">
        <i className="fas fa-shield-alt fa-2x mb-3 text-primary"></i>
        <h5>No Credit Risk</h5>
        <p>We don’t do hard credit checks. Your score is safe, and your info is private.</p>
      </div>
    </div>
  </div>
</section>


<section className="py-5 bg-light" data-aos="fade-up">
  <div className="container">
    <h3 className="text-center mb-5 fw-bold">What Renters Are Saying</h3>
    <div className="row text-center g-4">

      <div className="col-md-4">
        <div className="p-4 bg-white rounded shadow-sm h-100">
			<img
  src="https://randomuser.me/api/portraits/men/46.jpg"
  className="rounded-circle mb-3"
  width="59"
  alt="User avatar"
/>
          <p className="fst-italic">
            “I found my apartment in 2 days — and didn’t waste money on fees!”
          </p>
          <p className="fw-bold mt-3 mb-0">Carlos M.</p>
          <small className="text-muted">Downtown Miami</small>
        </div>
      </div>

      <div className="col-md-4">
        <div className="p-4 bg-white rounded shadow-sm h-100">
			<img
  src="https://randomuser.me/api/portraits/men/45.jpg"
  className="rounded-circle mb-3"
  width="60"
  alt="User avatar"
/>     
          <p className="fst-italic">
            “Way better than guessing which places I could afford. Saved me hours.”
          </p>
          <p className="fw-bold mt-3 mb-0">Jasmine L.</p>
          <small className="text-muted">Brickell</small>
        </div>
      </div>

      <div className="col-md-4">
        <div className="p-4 bg-white rounded shadow-sm h-100">
			<img
  src="https://randomuser.me/api/portraits/women/68.jpg"
  className="rounded-circle mb-3"
  width="60"
  alt="User avatar"
/>
          <p className="fst-italic">
            “I was approved instantly and booked a tour the next day. So easy.”
          </p>
          <p className="fw-bold mt-3 mb-0">Devon T.</p>
          <small className="text-muted">Wynwood</small>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-4 bg-primary text-white text-center" data-aos="zoom-in">
  <h4 className="mb-3">Ready to find your next home — the smart way?</h4>
  <Link to="/form" className="btn btn-light btn-lg">Get Started</Link>
</section>


<section className="py-5 bg-white text-center shadow " data-aos="fade-up"  data-aos-delay="200">
  <div className="container">
    <h4 className="fw-bold mb-3">Not ready to apply yet?</h4>
    <p className="mb-4">Leave us your email and we’ll let you know when new listings or matches are available — no spam, promise.</p>
    
    <form className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
      <i className="fas fa-envelope"></i>
	  <input
        type="email"
        className="form-control w-75 w-md-50"
        placeholder="Enter your email address"
        required
      />
      <button type="submit" className="btn btn-primary">
        Notify Me
      </button>
    </form>
  </div>
</section>





		</>
	);
};
