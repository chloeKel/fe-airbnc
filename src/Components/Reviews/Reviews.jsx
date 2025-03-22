import { useState } from "react";
import { StyledButton } from "../../Styling/StyledButton";
import useFetchReviews from "../../CustomHooks/useFetchReviews";

export default function Reviews({ propertyId }) {
  const { reviews, rating } = useFetchReviews(propertyId);
  const [activeReviews, setActiveReviews] = useState(false);

  const handleClick = () => setActiveReviews((display) => !display);

  return (
    <>
      {reviews.length === 1 ? <StyledButton onClick={handleClick}>{reviews.length} Review</StyledButton> : <StyledButton onClick={handleClick}>{reviews.length} Reviews</StyledButton>}
      {activeReviews
        ? reviews.map((review) => {
            const { review_id, rating, comment, guest, guest_avatar } = review;
            return (
              <div className="review" key={review_id}>
                <h3>{rating} stars</h3>
                <p>{comment}</p>
                <img src={guest_avatar} alt={guest} />
                <p>{guest}</p>
              </div>
            );
          })
        : null}
    </>
  );
}
