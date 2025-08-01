import React from "react";
import miami1 from "../assets/img/miami1.jpg";
import miami2 from "../assets/img/miami2.jpg";
import miami3 from "../assets/img/miami3.jpg";
import miami4 from "../assets/img/miami4.jpg";
import miami5 from "../assets/img/miami5.jpg";
import miami6 from "../assets/img/miami6.jpg";
import miami7 from "../assets/img/miami7.jpg";
import miami8 from "../assets/img/miami8.jpg";
import miami9 from "../assets/img/miami9.jpg";
import miami10 from "../assets/img/miami10.jpg";
import miami11 from "../assets/img/miami11.jpg";
import miami12 from "../assets/img/miami12.jpg";
import miami13 from "../assets/img/miami13.jpg";
import miami14 from "../assets/img/miami14.jpg";
import miami15 from "../assets/img/miami15.jpg";

const Listings = () => {


  const buildings = [
    {
      id: 1,
      name: "Sunset Grove Apartments",
      location: "Mid-Beach, Miami",
      price: "$2,300/month",
      image: miami1,
      criteria: "Low",
      description: "Affordable mid-rise complex near shops and the beach. Great for small families."
    },
    {
      id: 2,
      name: "Oceanview Towers",
      location: "Brickell, Miami",
      price: "$3,100/month",
      image: miami2,
      criteria: "High",
      description: "Luxury living with rooftop pool, concierge service, and ocean views."
    },
    {
      id: 3,
      name: "Palm Court Residences",
      location: "Wynwood, Miami",
      price: "$1,950/month",
      image: miami3,
      criteria: "Medium",
      description: "Trendy building near art galleries, cafes, and nightlife."
    },
    {
      id: 4,
      name: "Coral Bay Living",
      location: "Coral Gables",
      price: "$2,750/month",
      image: miami4,
      criteria: "Medium",
      description: "Spacious layouts with lush tropical landscaping and family-friendly amenities."
    },
    {
      id: 5,
      name: "Biscayne Breeze Flats",
      location: "Edgewater",
      price: "$2,850/month",
      image: miami5,
      criteria: "High",
      description: "Modern design near Biscayne Bay with coworking spaces and gym."
    },
    {
      id: 6,
      name: "Tropical Gardens",
      location: "Little Havana",
      price: "$1,700/month",
      image: miami6,
      criteria: "Low",
      description: "Colorful complex with a strong sense of community and nearby Cuban eats."
    },
    {
      id: 7,
      name: "The Urban Nest",
      location: "Downtown Miami",
      price: "$2,600/month",
      image: miami7,
      criteria: "Medium",
      description: "City vibe meets comfort. Close to transit, shops, and culture."
    },
    {
      id: 8,
      name: "Bayfront Residences",
      location: "Miami Shores",
      price: "$3,400/month",
      image: miami8,
      criteria: "High",
      description: "Exclusive building with bay access, high-end finishes, and smart home tech."
    },
    {
      id: 9,
      name: "The Flamingo Lofts",
      location: "South Beach",
      price: "$2,950/month",
      image: miami9,
      criteria: "Medium",
      description: "Beachside lofts with open concept living and vibrant nightlife."
    },
    {
      id: 10,
      name: "Coconut Grove Villas",
      location: "Coconut Grove",
      price: "$2,400/month",
      image: miami10,
      criteria: "Low",
      description: "Charming spot shaded by palms, perfect for creatives and students."
    },
    {
      id: 11,
      name: "The Marlin Residences",
      location: "Design District",
      price: "$3,200/month",
      image: miami11,
      criteria: "High",
      description: "Designer apartments in the heart of Miami fashion and art."
    },
    {
      id: 12,
      name: "Havana Heights",
      location: "Little Havana",
      price: "$1,800/month",
      image: miami12,
      criteria: "Low",
      description: "Cultural charm with historic touches and easy access to public transit."
    },
    {
      id: 13,
      name: "Brickell Heights",
      location: "Brickell",
      price: "$3,050/month",
      image: miami13,
      criteria: "High",
      description: "Upscale lifestyle with amenities including rooftop terrace and spa."
    },
    {
      id: 14,
      name: "Art Deco Suites",
      location: "South Beach",
      price: "$2,150/month",
      image: miami14,
      criteria: "Medium",
      description: "Stylish, iconic architecture blocks from Ocean Drive and cafés."
    },
    {
      id: 15,
      name: "Skyline Apartments",
      location: "Downtown Miami",
      price: "$2,800/month",
      image: miami15,
      criteria: "Medium",
      description: "Panoramic skyline views with modern interiors and fast Wi-Fi."
    }
  ];

  const getBadgeColor = (criteria) => {
    if (criteria === "Low") return "success";
    if (criteria === "Medium") return "warning";
    if (criteria === "High") return "danger";
    return "secondary";
  };

  return (
    <div className="container pt-5 mt-5">

      <div className="row mb-5">
  <div className="col">
    <div className="bg-light p-4 rounded shadow-sm">
      <h1 className="mb-4 text-primary fw-bold display-6 text-center">How It Works</h1>


      <p>
        Below you'll find a selection of apartments currently available in the Miami area. Each listing includes a location, price, and description — but also a <strong>Rental Criteria</strong> rating that helps you understand how easy or difficult it might be to qualify.
      </p>
      <p>
        <span className="badge bg-success me-2">Low</span> = Easier to qualify  
        <br />
        <span className="badge bg-warning text-dark me-2">Medium</span> = Moderate requirements  
        <br />
        <span className="badge bg-danger me-2">High</span> = Stricter requirements (e.g., higher credit, income)
      </p>
      <p className="mb-0">After completing the pre-screening form, we'll match you to apartments based on your score. 🎯</p>
    </div>
  </div>
</div>

      {buildings.map((building, index) => (
        <div
          key={building.id}
          className="row align-items-center mb-5"
          data-aos={`fade-${index % 2 === 0 ? "right" : "left"}`}
        >
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src={building.image}
              alt={building.name}
              className="img-fluid rounded shadow"
              style={{ height: "350px", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <h3>{building.name}</h3>
            <p className="mb-1">{building.location}</p>
            <p className="mb-1"><strong>{building.price}</strong></p>
            <p className="mb-2">{building.description}</p>
            <span className={`badge bg-${getBadgeColor(building.criteria)}`}>
              Criteria: {building.criteria}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;
