import Carousel from "../Images/Carousel";
import AverageRating from "../Reviews/AverageRating";
import { StyledPropsContainer, StyledPropsWrapper, StyledName, StyledCarouselContainer, StyledLocation, StyledPrice, StyledRating } from "../../Styling/PropertiesStyle";
import { StyledLink } from "../../Styling/NavigationStyles";

export default function PropertyCards({ properties, containerRef, height }) {
  return (
    <StyledPropsContainer ref={containerRef} $height={`${height}px`}>
      {properties.map((property) => {
        const { name, location, price_per_night, average_rating, favourited, favourite_id, property_id, images } = property;
        return (
          <StyledPropsWrapper key={property_id}>
            <StyledName>
              <StyledLink to={`/property/${property_id}`}>{name}</StyledLink>
            </StyledName>
            <StyledCarouselContainer>
              <Carousel images={images} name={name} favourited={favourited} propertyId={property_id} favouriteId={favourite_id} />
            </StyledCarouselContainer>
            <StyledLocation>
              <p>{location}</p>
            </StyledLocation>
            <StyledPrice>
              <p>£{price_per_night} per night</p>
            </StyledPrice>
            <StyledRating>
              <AverageRating avgRating={average_rating} />
            </StyledRating>
          </StyledPropsWrapper>
        );
      })}
    </StyledPropsContainer>
  );
}
