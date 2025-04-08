import { StyledRatingAsset } from "../../Styling/PropertiesStyle";

export default function AverageRating({ avgRating }) {
  return (
    <p>
      <StyledRatingAsset src="/assets/ratingStar.svg" alt={`${avgRating} stars`} />
      {avgRating}
    </p>
  );
}
