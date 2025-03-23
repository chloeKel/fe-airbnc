import axios from "axios";
import { useState, useEffect } from "react";
import { useErrorContext } from "../Contexts/Contexts";
const url = import.meta.env.VITE_API_URL;

export default function useFetchReviews(propertyId) {
  const { setError } = useErrorContext();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { reviews, average_rating },
        } = await axios.get(`${url}/api/properties/${propertyId}/reviews`);
        setReviews(reviews);
        setRating(average_rating);
      } catch (error) {
        setError(error);
      }
    })();
  }, [propertyId, setError]);

  return { reviews, rating };
}
