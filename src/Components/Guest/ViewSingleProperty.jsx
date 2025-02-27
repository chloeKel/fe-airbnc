import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleProperty } from "../../api";
import Reviews from "./Reviews";

export default function ViewSingleProperty() {
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    (async () => {
      const data = await fetchSingleProperty(id);
      console.log("property data:", data);
      setProperty(data);
    })();
  }, [id]);

  const { images, property_id, property_name, favourite_count, location, description, price_per_night, host, host_avatar } = property;

  return (
    <>
      <ul className="property">
        <li key={property_id}>
          <img src={images} alt={property_name} />
          <h3>{property_name}</h3>
          <p>£{price_per_night} per night</p>
          <p>Favourited by {favourite_count}</p>
          <p>{location}</p>
          <p>{description}</p>
        </li>
        <Reviews id={id} />
      </ul>
      <ul className="host">
        <p>Hosted by {host}</p>
        <img src={host_avatar} alt={host} />
      </ul>
    </>
  );
}
