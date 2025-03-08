import useReviews from "../../CustomHooks/useReviews";
import { StyledAvgRating } from "../../Styling/StyledImages";

export default function AverageRating({ id }) {
  const { rating } = useReviews(id);

  return (
    <h3>
      {rating}
      <StyledAvgRating src="assets/blkStar.svg" alt={`${rating} stars`} />
    </h3>
  );
}
