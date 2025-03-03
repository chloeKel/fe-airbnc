import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ErrorContext } from "../../Contexts/Contexts";
import { setErrorMsg } from "../../Utils/setErrorMsg";

import { fetchProperties } from "../../Utils/api";
import SortAndFilter from "../SortAndFilter/SortAndFilter";

export default function ViewProperties() {
  const { setError } = useContext(ErrorContext);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { properties } = await fetchProperties();
        setProperties(properties);
      } catch (error) {
        setError(setErrorMsg(error.response));
      }
    })();
  }, []);

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
