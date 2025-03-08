import { useState } from "react";
import Reviews from "../Reviews/Reviews";
import Reserve from "../Bookings/Reserve";
import { PropertyCard, PropertyImage, PropertyList } from "../../Styling/StyledPropertyCard";

export default function PropertyDetails({ property }) {
  const [reserveClicked, setReserveClicked] = useState(false);

  const { images, property_id, property_name, favourite_count, location, description, price_per_night } = property;

  return (
    <>
      <PropertyList>
        <PropertyCard key={property_id}>
          <PropertyImage src={images} alt={property_name} />
          <h3>{property_name}</h3>
          <p>Favourited by {favourite_count}</p>
          <p>{location}</p>
          <p>{description}</p>
          <p>£{price_per_night} per night</p>
        </PropertyCard>
      </PropertyList>
      <Reviews propertyId={property.property_id} />
      <div>
        <button onClick={() => setReserveClicked((display) => !display)}>Reserve</button>
        {reserveClicked ? <Reserve /> : null}
      </div>
    </>
  );
}
