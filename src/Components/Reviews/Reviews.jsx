import { useState } from "react";
import useFetchReviews from "../../CustomHooks/useFetchReviews";

export default function Reviews({ propertyId }) {
  const { reviews, rating } = useFetchReviews(propertyId);
  const [activeReviews, setActiveReviews] = useState(false);

  const handleClick = () => setActiveReviews((display) => !display);

  return (
    <>
      <h3>{rating} stars</h3>
      {reviews.length === 1 ? <button onClick={handleClick}>{reviews.length} Review</button> : <button onClick={handleClick}>{reviews.length} Reviews</button>}
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
