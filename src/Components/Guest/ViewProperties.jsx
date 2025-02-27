import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProperties } from "../../api";
import SortAndFilter from "./SortAndFilter/SortAndFilter";

export default function ViewProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProperties();
      setProperties(data);
    })();
  }, []);

  console.log("properties:", properties);

  return (
    <>
      <SortAndFilter />
      <ul className="properties">
        {properties.map((property) => {
          const { property_id, property_name, location, price_per_night, image } = property;
          return (
            <li key={property_id}>
              <img src={image} alt={property_name} />
              <Link to={`property/${property_id}`}>{property_name}</Link>
              <p>{location}</p>
              <p>£{price_per_night} per night</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
