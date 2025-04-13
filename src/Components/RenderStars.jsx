import { StyledRatingAsset } from "../Styling/PropertiesStyle";

export default function RenderStars(rating) {
  const total = 5;
  const stars = [];

  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<StyledRatingAsset key={i} src="/assets/ratingStar.svg" alt="1 star" />);
  }

  if (rating % 1 !== 0) {
    stars.push(<StyledRatingAsset key={`half-star-${rating}`} src="/assets/ratingHalfStar.svg" alt="half star" />);
  }

  for (let i = Math.ceil(rating); i < total; i++) {
    stars.push(<StyledRatingAsset key={`empty-star-${i}`} src="/assets/ratingEmptyStar.svg" alt="empty star" />);
  }
  return stars;
}
