import useFetchReviews from "../../CustomHooks/useFetchReviews";
import { StyledAvgRating } from "../../Styling/StyledImages";

export default function AverageRating({ propertyId }) {
  const { rating } = useFetchReviews(propertyId);

  return (
    <h3>
      {`${rating}`}
      <StyledAvgRating src="assets/blkStar.svg" alt={`${rating} stars`} />
    </h3>
  );
}
