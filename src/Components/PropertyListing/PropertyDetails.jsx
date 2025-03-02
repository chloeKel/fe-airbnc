import { useState } from "react";
import Reviews from "./Reviews";
import Reserve from "./Reserve";

export default function PropertyDetails({ property, id }) {
  const [reserveClicked, setReserveClicked] = useState(false);
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
          <p>£{property.price_per_night} per night</p>
        </li>
      </ul>
      <Reviews id={id} />
      <div>
        <button onClick={() => setReserveClicked((display) => !display)}>Reserve</button>
        {reserveClicked ? <Reserve /> : null}
      </div>
    </>
  );
}
