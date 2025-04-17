import axios from "axios";
import { useCallback } from "react";
import { useErrorContext } from "../Contexts/Contexts";
const url = import.meta.env.VITE_API_URL;

export function useReviews() {
  const { setError } = useErrorContext();

  const fetchReviews = useCallback(
    async (propId) => {
      try {
        const {
          data: { reviews, average_rating },
        } = await axios.get(`${url}/api/properties/${propId}/reviews`);
        return { reviews, average_rating };
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  const fetchSingleReview = useCallback(
    async (propId, userId) => {
      try {
        const { data } = await axios.get(`${url}/api/properties/${propId}/review?guest_id=${userId}`);
        return data;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  const postReview = useCallback(
    async (propId, userId, rating, review) => {
      try {
        const { data } = await axios.post(`${url}/api/properties/${propId}/reviews`, {
          guest_id: userId,
          rating: rating,
          comment: review,
        });
        return data;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  return { fetchReviews, fetchSingleReview, postReview };
}
