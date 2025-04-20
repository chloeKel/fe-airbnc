import { useState, useEffect } from "react";
import { useReviews } from "../../CustomHooks/useReviews";
import { StyledReview, StyledReviewsContainer, StyledStars, StyledText } from "../../Styling/ReviewsStyles";
import RenderStars from "../RenderStars";

export default function Reviews({ propertyId, height }) {
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
            <StyledStars $height={`${height / 1.5}px`}>{RenderStars(rating)}</StyledStars>
            <StyledText $height={`${height * 2}px`}>{comment}</StyledText>
            <StyledText $height={`${height / 1.5}px`}>{guest}</StyledText>
          </StyledReview>
        );
      })}
    </StyledReviewsContainer>
  );
}
