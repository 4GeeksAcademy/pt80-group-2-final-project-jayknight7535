import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export const RentalCard = ({ id, name, location, price, image, criteria, description }) => {
  // If your Favoritecontext isn't wired yet, this safely no-ops:
  const { addFavorite } = (typeof useFavorites === "function" ? useFavorites() : { addFavorite: () => {} });

  const handleAddToFavorites = () => {
    addFavorite?.({ id, name, location, price, image, criteria });
  };

  const badge =
    criteria === "Low" ? "success" :
    criteria === "Medium" ? "warning text-dark" :
    criteria === "High" ? "danger" : "secondary";

  return (
    <div className="card shadow-sm text-dark px-3" style={{ width: "27rem", overflow: "hidden" }}>
      <img src={image} className="card-img-top"    alt={name}   style={{ height: 200, objectFit: "cover" }}/>
      <div className="card-body p-3">
        <div className="bg-light p-3 rounded">
          <h5 className="card-title h4 mb-1" style={{ maxWidth: "100%" }}>{name}</h5>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="text-muted">{location}</small>
            <span className={`badge bg-${badge}`}>{criteria}</span>
          </div>

          <p className="mb-2 fw-bold" style={{ maxWidth: "100%" }}>{price}</p>
          <p className="card-text small mb-3" style={{ maxWidth: "100%" }}>{description}</p>

          <div className="text-center">
             <Link to="/listings" className="btn btn-primary">View listing</Link>
          </div>

        </div>
      </div>
    </div>
  );
};