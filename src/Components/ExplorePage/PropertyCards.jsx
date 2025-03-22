import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import AverageRating from "../Reviews/AverageRating";
import { StyledPropsUl, StyledPropsLi, StyledPropsDiv } from "../../Styling/StyledPropertyCard";

import { Fragment } from "react";

export default function PropertyCards({ properties }) {
  return (
    <StyledPropsUl>
      {properties.map((property) => {
        const { name, location, price_per_night, average_rating, favourited, favourite_id, property_id, images } = property;
        return (
          <Fragment key={property_id}>
            <Carousel images={images} name={name} favourited={favourited} propertyId={property_id} favouriteId={favourite_id} />
            <StyledPropsLi>
              <StyledPropsDiv>
                <Link to={`property/${property_id}`}>{name}</Link>
                <p>
                  {location}, £{price_per_night} per night
                </p>
              </StyledPropsDiv>
              <AverageRating avgRating={average_rating} />
            </StyledPropsLi>
          </Fragment>
        );
      })}
    </StyledPropsUl>
  );
}
