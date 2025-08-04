import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
	iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
	shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export const RentersInterestMap = () => {
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		const fetchLocations = async () => {
			try {
				const token = sessionStorage.getItem("token");
				const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/agent/renter-locations`, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});
				const data = await res.json();
				setLocations(data.locations);
			} catch (err) {
				console.error("Error loading locations", err);
			}
		};

		fetchLocations();
	}, []);

	return (
		<MapContainer
			center={[25.7617, -80.1918]} // Miami
			zoom={10}
			scrollWheelZoom={true}
			style={{ height: "500px", width: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{locations.map((loc, i) => (
				<Marker key={i} position={[loc.lat, loc.lng]}>
					<Popup>
						<strong>{loc.user_name}</strong><br />
						ZIP: {loc.zip_code}
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};