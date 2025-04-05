import { StyledAsset } from "../../Styling/PropertiesStyle";

export default function AverageRating({ avgRating }) {
  return (
    <p>
      <StyledAsset src="/assets/yellowStar.svg" alt={`${avgRating} stars`} />
      {avgRating}
    </p>
  );
}
