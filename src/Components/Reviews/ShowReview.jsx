import { useState, useEffect } from "react";
import { useReviews } from "../../CustomHooks/useReviews";
import { StyledRatingBar, StyledComment, StyledReviewContainer } from "../../Styling/ReviewsStyles";
import RenderStars from "../RenderStars";

export default function ShowReview({ propId, userId }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const { fetchSingleReview } = useReviews();

  useEffect(() => {
    fetchSingleReview(propId, userId).then(({ rating, comment }) => {
      setRating(rating);
      setReview(comment);
    });
  });

  return (
    <StyledReviewContainer>
      <StyledRatingBar>{RenderStars(rating)}</StyledRatingBar>
      <StyledComment>{review}</StyledComment>
    </StyledReviewContainer>
  );
}
