import { useState } from "react";
import { StyledPropImg } from "../../Styling/CarouselStyle";
import { StyledGallery, StyledThumbnails, StyledThumbnail } from "../../Styling/GalleryStyles";
import useMeasure from "../../CustomHooks/useMeasure";

export default function Gallery({ images, name }) {
  const [mainImg, setMainImg] = useState(images[0]);
  const {
    measureRef,
    dimensions: { width, height },
  } = useMeasure();
  const thumbnailWidth = width / 3;
  const thumbnailHeight = height / 3;
  const thumbnails = images.filter((img) => img !== mainImg);

  return (
    <StyledGallery>
      <StyledPropImg src={mainImg} alt={name} ref={measureRef} />
      <StyledThumbnails>
        {thumbnails.map((img, index) => (
          <StyledThumbnail key={index} src={img} alt={name} onClick={() => setMainImg(img)} $width={`${thumbnailWidth}px`} $height={`${thumbnailHeight}px`} />
        ))}
      </StyledThumbnails>
    </StyledGallery>
  );
}
