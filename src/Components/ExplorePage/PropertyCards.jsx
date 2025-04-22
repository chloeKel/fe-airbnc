import { useEffect, useRef } from "react";
import Carousel from "../Images/Carousel";
import AverageRating from "../Reviews/AverageRating";
import { StyledPropsContainer, StyledPropsWrapper, StyledName, StyledCarouselContainer, StyledLocation, StyledPrice, StyledRating } from "../../Styling/PropertiesStyle";
import { StyledLink } from "../../Styling/NavigationStyles";
import useScrollPosition from "../../CustomHooks/useScrollPosition";

export default function PropertyCards({ properties, containerRef, height }) {
  const scrollRef = useRef();
  const scrollPosition = useScrollPosition();

  const handleScrollPos = () => {
    scrollRef.current = scrollPosition;
    sessionStorage.setItem("scrollPos", scrollRef.current);
  };

  useEffect(() => {
    const storedPosition = sessionStorage.getItem("scrollPos");
    if (storedPosition) {
      window.scrollTo(0, storedPosition);
      sessionStorage.clear();
    }
  }, []);

  return (
    <StyledPropsContainer ref={containerRef} $height={`${height}px`}>
      {properties.map((property) => {
        const { name, location, price_per_night, average_rating, favourited, favourite_id, property_id, images } = property;
        return (
          <StyledPropsWrapper key={property_id} id={property_id}>
            <StyledName $height={`${height * 3}px`}>
              <StyledLink to={`/property/${property_id}`} onClick={() => handleScrollPos()}>
                <span>{name}</span>
              </StyledLink>
              <img src="/assets/blueRightArrow.svg" alt="down arrow" />
            </StyledName>
            <StyledCarouselContainer>
              <Carousel images={images} name={name} favourited={favourited} propertyId={property_id} favouriteId={favourite_id} />
            </StyledCarouselContainer>
            <StyledLocation $height={`${height * 3}px`}>
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
