import { Link } from "react-router-dom";
import { PropertyList, PropertyCard, PropertyImage } from "../../Styling/StyledPropertyCard";
import ToggleFavourite from "../Favourites/ToggleFavourite";

export default function PropertyCards({ properties }) {
  return (
    <PropertyList>
      {properties.map((property, index) => {
        const { property_id, property_name, location, price_per_night, images, favourited } = property;
        return (
          <PropertyCard key={`${property_id}-${index}`}>
            <PropertyImage src={images[0]} alt={property_name} />
            <Link to={`property/${property_id}`}>{property_name}</Link>
            <p>{location}</p>
            <p>£{price_per_night} per night</p>
            <ToggleFavourite favourited={favourited} />
          </PropertyCard>
        );
      })}
    </PropertyList>
  );
}
