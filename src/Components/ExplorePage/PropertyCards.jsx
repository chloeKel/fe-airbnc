import Carousel from "../Carousel";
import AverageRating from "../Reviews/AverageRating";
import { StyledPropsUl, StyledPropsLi, StyledPropsDiv, StyledText, PropertiesContainer } from "../../Styling/PropertiesStyle";
import { Fragment } from "react";
import { StyledLink } from "../../Styling/NavigationStyles";

export default function PropertyCards({ properties }) {
  return (
    <PropertiesContainer>
      <StyledPropsUl>
        {properties.map((property) => {
          const { name, location, price_per_night, average_rating, favourited, favourite_id, property_id, images } = property;
          return (
            <Fragment key={property_id}>
              <Carousel images={images} name={name} favourited={favourited} propertyId={property_id} favouriteId={favourite_id} />
              <StyledPropsLi>
                <StyledPropsDiv>
                  <StyledLink to={`/property/${property_id}`} color="#1007fa">
                    {name}
                  </StyledLink>
                  <StyledText>
                    {location}. £{price_per_night} per night
                  </StyledText>
                  {/* <StyledText>£{price_per_night} per night</StyledText> */}
                </StyledPropsDiv>
                <AverageRating avgRating={average_rating} />
              </StyledPropsLi>
            </Fragment>
          );
        })}
      </StyledPropsUl>
    </PropertiesContainer>
  );
}
