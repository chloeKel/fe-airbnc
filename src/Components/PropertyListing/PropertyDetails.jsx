import { useNavigate } from "react-router-dom";
import Reviews from "./Reviews";

export default function PropertyDetails({ property, id }) {
  const navigate = useNavigate();

  const { images, property_id, property_name, favourite_count, location, description } = property;

  return (
    <>
      <ul className="property">
        <li key={property_id}>
          <img src={images} alt={property_name} />
          <h3>{property_name}</h3>
          <p>Favourited by {favourite_count}</p>
          <p>{location}</p>
          <p>{description}</p>
        </li>
      </ul>
      <Reviews id={id} />
      <div>
        <p>£{property.price_per_night} per night</p>
        <button onClick={() => navigate(`/property/${id}/reserve`)}>Reserve</button>
      </div>
    </>
  );
}
