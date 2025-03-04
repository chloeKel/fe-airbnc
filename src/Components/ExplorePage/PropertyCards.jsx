import { Link } from "react-router-dom";

export default function PropertyCards({ properties }) {
  return (
    <ul className="properties">
      {properties.map((property, index) => {
        const { property_id, property_name, location, price_per_night, images } = property;
        return (
          <li key={`${property_id}-${index}`}>
            <img src={images[0]} alt={property_name} />
            <Link to={`property/${property_id}`}>{property_name}</Link>
            <p>{location}</p>
            <p>£{price_per_night} per night</p>
          </li>
        );
      })}
    </ul>
  );
}
