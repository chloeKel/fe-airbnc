import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../Contexts/Contexts";
import { fetchReviews } from "../Utils/api";

export default function useReviews(id) {
  const { setError } = useContext(ErrorContext);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("");
  const [reviewCount, setReviewCount] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { reviews, average_rating } = await fetchReviews(id);
        setReviews(reviews);
        setRating(average_rating);
        setReviewCount(reviews.length);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return { reviews, rating, reviewCount };
}
