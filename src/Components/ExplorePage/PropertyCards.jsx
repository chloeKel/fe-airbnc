import Carousel from "../Carousel";
import AverageRating from "../Reviews/AverageRating";
import { StyledPropsContainer, StyledPropsWrapper, StyledName, StyledCarouselContainer, StyledLocation, StyledPrice, StyledRating, StyledPropertyLink } from "../../Styling/PropertiesStyle";

export default function PropertyCards({ properties }) {
  return (
    <StyledPropsContainer>
      {properties.map((property) => {
        const { name, location, price_per_night, average_rating, favourited, favourite_id, property_id, images } = property;
        return (
          <StyledPropsWrapper key={property_id}>
            <StyledName>
              <StyledPropertyLink to={`/property/${property_id}`} color="#1007fa">
                {name}
              </StyledPropertyLink>
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
