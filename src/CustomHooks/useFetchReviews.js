import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useErrorContext } from "../Contexts/Contexts";
const url = import.meta.env.VITE_API_URL;

export function useFetchReviews(propertyId) {
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

export function usePostReview() {
  const { setError } = useErrorContext();

  const postFavourite = useCallback(
    async (propId, userId, rating, comment) => {
      console.log(propId, userId, rating, comment);
      try {
        const { data } = await axios.post(`${url}/api/properties/${propId}/reviews`, {
          guest_id: userId,
          rating: rating,
          comment: comment,
        });
        return data;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  return postFavourite;
}
