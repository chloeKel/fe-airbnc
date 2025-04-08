import { useState } from "react";
import { StyledPropImg } from "../../Styling/CarouselStyle";
import { StyledGallery, StyledThumbnails, StyledThumbnail } from "../../Styling/GalleryStyles";

export default function Gallery({ images, name }) {
  const [mainImg, setMainImg] = useState(images[0]);
  const thumbnailWidth = 100 / (images.length - 1);
  const thumbnails = images.filter((img) => img !== mainImg);

  return (
    <StyledGallery>
      <StyledPropImg src={mainImg} alt={name} />
      <StyledThumbnails>
        {thumbnails.map((img, index) => (
          <StyledThumbnail key={index} src={img} alt={name} onClick={() => setMainImg(img)} width={thumbnailWidth} />
        ))}
      </StyledThumbnails>
    </StyledGallery>
  );
}
