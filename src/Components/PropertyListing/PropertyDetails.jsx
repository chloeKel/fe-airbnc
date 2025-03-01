import Reviews from "./Reviews";

export default function PropertyDetails({ property, id }) {
  const { images, property_id, property_name, favourite_count, location, description, price_per_night } = property;

  return (
    <div>
      <ul className="property">
        <li key={property_id}>
          <img src={images} alt={property_name} />
          <h3>{property_name}</h3>
          <p>£{price_per_night} per night</p>
          <p>Favourited by {favourite_count}</p>
          <p>{location}</p>
          <p>{description}</p>
        </li>
      </ul>
      <Reviews id={id} />
    </div>
  );
}
