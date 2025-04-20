import { StyledStarAsset } from "../Styling/ReviewsStyles";

export default function RenderStars(rating) {
  const total = 5;
  const stars = [];

  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<StyledStarAsset key={i} src="/assets/ratingStar.svg" alt="1 star" />);
  }

  if (rating % 1 !== 0) {
    stars.push(<StyledStarAsset key={`half-star-${rating}`} src="/assets/ratingHalfStar.svg" alt="half star" />);
  }

  for (let i = Math.ceil(rating); i < total; i++) {
    stars.push(<StyledStarAsset key={`empty-star-${i}`} src="/assets/ratingEmptyStar.svg" alt="empty star" />);
  }
  return stars;
}
