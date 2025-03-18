import { StyledAvgRating } from "../../Styling/StyledImages";

export default function AverageRating({ avgRating }) {
  return (
    <StyledAvgRating>
      <h3>
        <img src="assets/blackStr.svg" alt={`${avgRating} stars`} />
        {avgRating}
      </h3>
    </StyledAvgRating>
  );
}
