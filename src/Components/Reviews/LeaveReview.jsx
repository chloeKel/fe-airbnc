import { useState } from "react";
import { StyledLeaveReview, StyledTextArea, StyledRatingBar, StyledStarButton, StyledStarAsset } from "../../Styling/ReviewsStyles";
import { useUserContext } from "../../Contexts/Contexts";
import { usePostReview } from "../../CustomHooks/useFetchReviews";
import { StyledButton } from "../../Styling/ButtonStyles";

export default function LeaveReview({ propId }) {
  const { userId } = useUserContext();
  const postFavourite = usePostReview();
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState(null);

  const handleInteract = (e, i) => {
    const { left, width } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const rating = i + (x < width / 2 ? 0.5 : 1);
    setRating(rating);
  };

  const handleAsset = (i) => {
    const starValue = i + 1;
    if (rating >= starValue) return "/assets/ratingStar.svg";
    if (rating >= starValue - 0.5) return "/assets/ratingHalfStar.svg";
    return "/assets/ratingEmptyStar.svg";
  };

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await postFavourite(propId, userId, Number(rating), review);
    console.log(response);
  };

  return (
    <StyledLeaveReview>
      <label>Leave a review...</label>
      <StyledRatingBar>
        {[...Array(5)].map((_, i) => {
          return (
            <StyledStarButton key={i} onClick={(e) => handleInteract(e, i)} onMouseMove={(e) => handleInteract(e, i)}>
              <StyledStarAsset src={handleAsset(i)} />
            </StyledStarButton>
          );
        })}
      </StyledRatingBar>
      <StyledTextArea onChange={handleChange} rows="5" autoComplete="off" autoCorrect="on" maxLength="500" aria-label="Leave a review..."></StyledTextArea>
      <StyledButton onClick={handleSubmit} $width="50%" $borderleft="1px solid #2a5faf" $bordertop="1px solid #2a5faf">
        Submit
      </StyledButton>
    </StyledLeaveReview>
  );
}
