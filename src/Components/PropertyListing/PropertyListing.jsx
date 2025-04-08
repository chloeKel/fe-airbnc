import { useParams } from "react-router-dom";
import { useUserContext } from "../../Contexts/Contexts";
import useFetchProp from "../../CustomHooks/useFetchProp";
import Reviews from "../Reviews/Reviews";
import Reserve from "../Bookings/Reserve";
import AverageRating from "../Reviews/AverageRating";
import Loader from "../Loader";
import { StyledAvatar, StyledBackButton, StyledHeading, StyledHost, StyledPropContainer, StyledPropInfo, StyledStatsDiv } from "../../Styling/ListingStyle";
import ToggleFavourite from "../Favourites/ToggleFavourite";
import { StyledPropImg } from "../../Styling/CarouselStyle";
import Gallery from "../Images/Gallery";

export default function PropertyListing() {
  const { userId } = useUserContext();
  const { id: propertyId } = useParams();
  const { isLoading, prop } = useFetchProp(propertyId, userId);

  const { property_id, name, location, price_per_night, description, average_rating, favourited, favourite_id, images, host, host_avatar } = prop;

  return (
    <>
      <StyledBackButton to={-1} aria-label="Go back" preventScrollReset={true} />
      <StyledPropContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <StyledHeading>
              <h4>{name}</h4>
              <h4>{location}</h4>
            </StyledHeading>
            <StyledHost>
              <StyledAvatar src={host_avatar} alt={host} />
              Hosted by {host}
            </StyledHost>
            <StyledPropInfo>
              <StyledPropImg src={images[1]} alt={name} />
              <StyledStatsDiv>
                <p>£{price_per_night} per night</p>
                <AverageRating avgRating={average_rating} />
                <div>
                  <ToggleFavourite favourited={favourited} propertyId={propertyId} favouriteId={favourite_id} unfavouriteAsset={"/assets/blueUnfavouriteHeart.svg"} />
                </div>
              </StyledStatsDiv>
              <p style={{ padding: "3rem 0", borderBottom: "1px solid #2a5faf" }}>{description}</p>
              <Gallery images={images} name={name} />
              <Reserve />
            </StyledPropInfo>
            <Reviews propertyId={property_id} />
          </>
        )}
      </StyledPropContainer>
    </>
  );
}
