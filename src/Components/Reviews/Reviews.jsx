import { useState, useEffect } from "react";
import { useReviews } from "../../CustomHooks/useReviews";
import { StyledRating, StyledReview, StyledReviewsContainer, StyledText } from "../../Styling/ReviewsStyles";
import RenderStars from "../RenderStars";

export default function Reviews({ propertyId }) {
  const { fetchReviews } = useReviews();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetchReviews(propertyId).then(({ reviews, average_rating }) => {
      setReviews(reviews);
      setRating(average_rating);
    });
  }, [fetchReviews, propertyId]);

  return (
    <StyledReviewsContainer>
      {reviews.map((review) => {
        const { review_id, comment, guest } = review;
        return (
          <StyledReview key={review_id}>
            <StyledRating>{RenderStars(rating)}</StyledRating>
            <StyledText $height="10vh">{comment}</StyledText>
            <StyledText $height="fit-content">{guest}</StyledText>
          </StyledReview>
        );
      })}
    </StyledReviewsContainer>
  );
}
