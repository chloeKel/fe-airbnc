import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../Contexts/Contexts";

export default function useFetchReviews(propertyId) {
  const { setError } = useContext(ErrorContext);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { reviews, average_rating },
        } = await axios.get(`https://airbnc-k7rs.onrender.com/api/properties/1/reviews`);
        setReviews(reviews);
        setRating(average_rating);
      } catch (error) {
        setError(error);
      }
    })();
  }, [propertyId, setError]);

  return { reviews, rating };
}
