import { StyledAsset } from "../../Styling/StyledPropertyCard";

export default function AverageRating({ avgRating }) {
  return (
    <p>
      <StyledAsset src="/assets/blackStr.svg" alt={`${avgRating} stars`} />
      {avgRating}
    </p>
  );
}
