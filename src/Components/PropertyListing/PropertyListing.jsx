import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../../Contexts/Contexts";
import useScreenSize from "../../CustomHooks/useScreenSize";
import useFetchProp from "../../CustomHooks/useFetchProp";
import Reviews from "../Reviews/Reviews";
import Reserve from "../Bookings/Reserve";
import AverageRating from "../Reviews/AverageRating";
import Loader from "../Loader";
import { StyledAvatar, StyledHeading, StyledHost, StyledPropContainer, StyledPropInfo, StyledStatsDiv, StyledDesc } from "../../Styling/ListingStyle";
import ToggleFavourite from "../Favourites/ToggleFavourite";
import { StyledPropImg } from "../../Styling/CarouselStyle";
import Gallery from "../Images/Gallery";

export default function PropertyListing({ setShowBackButton }) {
  const { userId } = useUserContext();
  const { id: propertyId } = useParams();
  const { isLoading, prop } = useFetchProp(propertyId, userId);
  const screenSize = useScreenSize();
  const height = screenSize.width / 6;

  useEffect(() => {
    setShowBackButton(true);
    return () => {
      setShowBackButton(false);
    };
  }, [setShowBackButton]);

  const { property_id, name, location, price_per_night, description, average_rating, favourited, favourite_id, images, host, host_avatar } = prop;

  return (
    <StyledPropContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <StyledHeading $height={`${height}px`}>
            <h4>{name}</h4>
            <h4>{location}</h4>
          </StyledHeading>
          <StyledHost $height={`${height}px`}>
            <StyledAvatar src={host_avatar} alt={host} />
            Hosted by {host}
          </StyledHost>
          <StyledPropInfo>
            <StyledPropImg src={images[1]} alt={name} />
            <StyledStatsDiv $height={`${height}px`}>
              <p>£{price_per_night} per night</p>
              <AverageRating avgRating={average_rating} />
              <div>
                <ToggleFavourite favourited={favourited} propertyId={propertyId} favouriteId={favourite_id} unfavouriteAsset={"/assets/blueUnfavouriteHeart.svg"} />
              </div>
            </StyledStatsDiv>
            <StyledDesc $height={`${height * 3}px`}>{description}</StyledDesc>
            <Gallery images={images} name={name} />
            <Reserve height={height} />
          </StyledPropInfo>
          <Reviews propertyId={property_id} height={height} />
        </>
      )}
    </StyledPropContainer>
  );
}
