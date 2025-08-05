import { Link } from "react-router-dom";
import logo from "../assets/img/rentmatch-logo.png"; // Make sure this is correct

export const Navbar = () => {
	return (
		<nav className="navbar fixed-top transparent-navbar">
			<div className="container d-flex justify-content-between align-items-center py-2">
				<Link to="/" className="navbar-brand d-flex align-items-center">
					<img src={logo} alt="RentMatch" height="60" width="250" />
				</Link>
				<div className="d-flex gap-2">
					<Link to="/choose-role" className="btn btn-outline-light btn-m">
						Signup
					</Link>
					<Link to="/login" className="btn btn-outline-light btn-m">
						 Login  
					</Link>
					<Link to="/listings" className="btn btn-outline-dark mx-2">
                     Browse Listings
                    </Link>

				</div>
			</div>
		</nav>
	);
};
