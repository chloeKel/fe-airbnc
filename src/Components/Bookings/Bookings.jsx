import { useState, useEffect } from "react";
import { useUserContext } from "../../Contexts/Contexts";
import { Link } from "react-router-dom";
import AmendBooking from "./AmendBooking";
import DefaultContent from "../DefaultContent";
import { formatDateString } from "../../Utils/utils";
import { StyledBookingsDiv, StyledBookingsImg, StyledBookingsLi, StyledBookingsUl } from "../../Styling/BookingsStyles";
import { useBookingRequests } from "../../CustomHooks/useBookingRequests";

export default function Bookings() {
  const { userId } = useUserContext();
  const { fetchBookings } = useBookingRequests(userId);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings(userId).then((res) => setBookings(res));
  }, [fetchBookings, userId]);

  return (
    <>
      {bookings.length === 0 ? (
        <DefaultContent component="bookings" />
      ) : (
        <>
          <h2>Bookings</h2>
          <StyledBookingsUl>
            {bookings.map((booking, index) => {
              const { booking_id, image, check_in_date, check_out_date, property_userId, property_name } = booking;
              const checkIn = formatDateString(check_in_date);
              const checkOut = formatDateString(check_out_date);
              return (
                <StyledBookingsLi key={`${booking_id}-${index}`}>
                  <StyledBookingsImg src={image} alt={property_name} />
                  <h3>
                    <Link to={`/property/${property_userId}`}>{property_name}</Link>
                  </h3>
                  <p>Booking reference: {booking_id}</p>
                  <p>Check-in-date: {checkIn.split("-").reverse().join("-")}</p>
                  <p>Check-out-date: {checkOut.split("-").reverse().join("-")}</p>
                  <StyledBookingsDiv>
                    <AmendBooking prevCheckIn={checkIn} prevCheckOut={checkOut} bookingId={booking_id} setBookings={setBookings} userId={userId} />
                  </StyledBookingsDiv>
                </StyledBookingsLi>
              );
            })}
          </StyledBookingsUl>
        </>
      )}
    </>
  );
}
