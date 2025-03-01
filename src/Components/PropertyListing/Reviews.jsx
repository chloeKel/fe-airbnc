import { useState, useEffect } from "react";
import { fetchReviews } from "../../api";

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("");
  const [reviewCount, setReviewCount] = useState(0);
  const [activeReviews, setActiveReviews] = useState(false);

  useEffect(() => {
    (async () => {
      const { reviews, average_rating } = await fetchReviews(id);
      setReviews(reviews);
      setRating(average_rating);
      setReviewCount(reviews.length);
    })();
  }, [id]);

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
