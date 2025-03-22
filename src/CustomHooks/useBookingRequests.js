import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useErrorContext } from "../Contexts/Contexts";

export function useFetchBookings(userId) {
  const { setError } = useErrorContext();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { bookings },
        } = await axios.get(`https://airbnc-k7rs.onrender.com/api/users/${userId}/bookings`);
        setBookings(bookings);
      } catch (error) {
        setError(error);
      }
    })();
  }, [userId, setError]);

  return bookings;
}

export function useBookingRequests() {
  const { setError } = useErrorContext();

  const postBooking = useCallback(
    async (userId, checkIn, checkOut, propertyId) => {
      try {
        const response = await axios.post(`https://airbnc-k7rs.onrender.com/api/properties/${propertyId}/booking`, {
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
        const response = await axios.patch(`https://airbnc-k7rs.onrender.com/api/bookings/${bookingId}`, {
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
        const response = await axios.delete(`https://airbnc-k7rs.onrender.com/api/bookings/${bookingId}`);
        return response;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  return { patchBooking, postBooking, deleteBooking };
}
