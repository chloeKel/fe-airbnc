import useFetchReviews from "../../CustomHooks/useFetchReviews";
import { StyledRating, StyledReview, StyledReviewsContainer, StyledText } from "../../Styling/ReviewsStyles";
import RenderStars from "../RenderStars";

export default function Reviews({ propertyId }) {
  const { reviews, rating } = useFetchReviews(propertyId);

  return (
    <StyledReviewsContainer>
      {reviews.map((review) => {
        const { review_id, comment, guest } = review;
        return (
          <StyledReview key={review_id}>
            <StyledRating>{RenderStars(rating)}</StyledRating>
            <StyledText>{comment}</StyledText>
            <StyledText>{guest}</StyledText>
          </StyledReview>
        );
      })}
    </StyledReviewsContainer>
  );
}
