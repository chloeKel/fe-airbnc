import axios from "axios";
import { useCallback } from "react";
import { useErrorContext } from "../Contexts/Contexts";
const url = import.meta.env.VITE_API_URL;

export function useBookingRequests() {
  const { setError } = useErrorContext();

  const fetchBookings = useCallback(
    async (userId) => {
      try {
        const {
          data: { bookings },
        } = await axios.get(`${url}/api/users/${userId}/bookings`);
        return bookings;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  const postBooking = useCallback(
    async (userId, checkIn, checkOut, propertyId) => {
      try {
        const response = await axios.post(`${url}/api/properties/${propertyId}/booking`, {
          guest_id: userId,
          check_in_date: checkIn,
          check_out_date: checkOut,
        });
        return response;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  const patchBooking = useCallback(
    async (bookingId, checkIn, checkOut) => {
      try {
        const response = await axios.patch(`${url}/api/bookings/${bookingId}`, {
          check_in_date: checkIn,
          check_out_date: checkOut,
        });
        return response;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  const deleteBooking = useCallback(
    async (bookingId) => {
      try {
        const response = await axios.delete(`${url}/api/bookings/${bookingId}`);
        return response;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  return { fetchBookings, patchBooking, postBooking, deleteBooking };
}
