import { useParams } from "react-router-dom";
import { Fragment, useState } from "react";
import { useUserContext } from "../../Contexts/Contexts";
import useFetchProp from "../../CustomHooks/useFetchProp";
import Carousel from "../Carousel";
import Reviews from "../Reviews/Reviews";
import Host from "../Host";
import Reserve from "../Bookings/Reserve";
import AverageRating from "../Reviews/AverageRating";
import Loading from "../Loading";
import { StyledPropContainer, StyledStatsDiv } from "../../Styling/ListingStyle";
import { StyledButton } from "../../Styling/ButtonStyles";

export default function PropertyListing() {
  const { userId } = useUserContext();
  const { id: propertyId } = useParams();
  const prop = useFetchProp(propertyId, userId);
  const [reserveClicked, setReserveClicked] = useState(false);

  if (!prop || Object.keys(prop).length === 0) {
    return <Loading />;
  }

  const { property_id, name, location, price_per_night, description, favourite_count, average_rating, favourited, favourite_id, images, host, host_avatar } = prop;

  return (
    <Fragment>
      <Carousel images={images} name={name} favourited={favourited} propertyId={property_id} favouriteId={favourite_id} />
      <h3>{name}</h3>
      <p>{location}</p>
      <StyledPropContainer key={property_id}>
        <StyledStatsDiv>
          <p>£{price_per_night} per night</p>
          <AverageRating avgRating={average_rating} />
          <p>{favourite_count} favourites</p>
        </StyledStatsDiv>
        <p>{description}</p>
      </StyledPropContainer>
      <Reviews propertyId={property_id} />
      <StyledButton onClick={() => setReserveClicked((display) => !display)}>Reserve</StyledButton>
      {reserveClicked ? <Reserve /> : null}
      <Host host={host} hostAvatar={host_avatar} />
    </Fragment>
  );
}
