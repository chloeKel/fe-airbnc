import { useState } from "react";
import useReviews from "../../CustomHooks/useReviews";

export default function Reviews({ id }) {
  const { reviews, rating, reviewCount } = useReviews(id);
  const [activeReviews, setActiveReviews] = useState(false);

  const handleClick = () => setActiveReviews((display) => !display);

  return (
    <>
      <h3>{rating} stars</h3>
      {reviewCount === 1 ? <button onClick={handleClick}>{reviewCount} Review</button> : <button onClick={handleClick}>{reviewCount} Reviews</button>}
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
