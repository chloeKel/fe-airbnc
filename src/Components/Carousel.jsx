import { useState, useRef } from "react";
import { StyledCarouselDiv, StyledCarouselUl, StyledCarouselLi, StyledCarouselImg } from "../Styling/CarouselStyle";
import ToggleFavourite from "./Favourites/ToggleFavourite";

export default function Carousel({ images, name, favourited, propertyId, favouriteId }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchRef = useRef(0);
  const scrollRef = useRef(false);

  const handleTouchStart = (e) => (touchRef.current = e.touches[0].clientX);

  const handleTouchEnd = (e) => {
    const endTouch = e.changedTouches[0].clientX;
    const diff = touchRef.current - endTouch;

    if (diff > 50 && currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (diff < -50 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (!scrollRef.current) {
        scrollRef.current = true;

        if (e.deltaX > 50 && currentIndex < images.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else if (e.deltaX < -50 && currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }
        setTimeout(() => {
          scrollRef.current = false;
        }, 300);
      }
    }
  };

  return (
    <StyledCarouselDiv onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onWheel={handleWheel}>
      <StyledCarouselUl $currentIndex={currentIndex} $images={images}>
        {images.map((img, index) => (
          <StyledCarouselLi key={index}>
            <StyledCarouselImg src={img} alt={name} />
          </StyledCarouselLi>
        ))}
      </StyledCarouselUl>
      <ToggleFavourite favourited={favourited} propertyId={propertyId} favouriteId={favouriteId} />
    </StyledCarouselDiv>
  );
}
