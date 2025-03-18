import { useParams } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../Contexts/Contexts";
import useFetchProp from "../../CustomHooks/useFetchProp";
import useFetchUser from "../../CustomHooks/useFetchUser";
import AverageRating from "../Reviews/AverageRating";
import Reviews from "../Reviews/Reviews";
import Host from "../Host";
import Reserve from "../Bookings/Reserve";
import Carousel from "../Carousel";
import { StyledPropContainer, StyledStatsDiv } from "../../Styling/PropListingStyle";
import { StyledButton } from "../../Styling/StyledButton";

export default function PropertyListing() {
  const { userId } = useUserContext();
  const { id: propertyId } = useParams();
  const { prop } = useFetchProp(userId, propertyId);
  const { user } = useFetchUser(prop.host_id);
  const [reserveClicked, setReserveClicked] = useState(false);

  console.log("prop:", prop);

  return (
    <StyledPropContainer key={prop.property_id}>
      <Carousel images={prop.images} name={prop.name} favourite={prop.favourited} propertyId={prop.property_id} favouriteId={prop.favourite_id} />
      <StyledStatsDiv>
        <AverageRating avgRating={prop.average_rating} />
        <p>£{prop.price_per_night} per night</p>
        <p>Favourited by {prop.favourite_count}</p>
      </StyledStatsDiv>
      <Host host={user} />
      <h3>{prop.name}</h3>
      <p>
        {prop.property_type}, {prop.location}
      </p>
      <p>{prop.description}</p>
      <Reviews propertyId={prop.property_id} />
      <StyledButton onClick={() => setReserveClicked((display) => !display)}>Reserve</StyledButton>
      {reserveClicked ? <Reserve /> : null}
    </StyledPropContainer>
  );
}
