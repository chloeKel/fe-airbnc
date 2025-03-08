import { useState, useEffect, useContext, useCallback } from "react";
import { UserContext, ErrorContext } from "../../Contexts/Contexts";
import { Link } from "react-router-dom";
import useBookingRequests from "../../CustomHooks/useBookingRequests";
import AmendBooking from "./AmendBooking";
import { formatDateString } from "../../Utils/utils";
import DefaultContent from "../DefaultContent";
import { PropertyCard, PropertyImage, PropertyList } from "../../Styling/StyledPropertyCard";

export default function Bookings() {
  const { setRedirect } = useContext(ErrorContext);
  const { userId } = useContext(UserContext);
  const { fetchBookings } = useBookingRequests();
  const [bookings, setBookings] = useState([]);

  const refreshBookings = useCallback(async () => {
    const data = await fetchBookings(userId);
    setBookings(data);
  }, [fetchBookings, userId]);

  useEffect(() => {
    setRedirect(false);
    refreshBookings();
  }, [setRedirect, refreshBookings]);

  return (
    <>
      {bookings.length < 1 ? (
        <DefaultContent component="bookings" />
      ) : (
        <>
          <h2>Your Bookings</h2>
          <PropertyList>
            {bookings.map((booking, index) => {
              const { booking_id, image, check_in_date, check_out_date, property_userId, property_name } = booking;
              const checkIn = formatDateString(check_in_date);
              const checkOut = formatDateString(check_out_date);
              return (
                <PropertyCard key={`${booking_id}-${index}`}>
                  <PropertyImage src={image} alt={property_name} />
                  <h3>
                    <Link to={`/property/${property_userId}`}>{property_name}</Link>
                  </h3>
                  <p>Booking reference: {booking_id}</p>
                  <p>Check-in-date: {checkIn.split("-").reverse().join("-")}</p>
                  <p>Check-out-date: {checkOut.split("-").reverse().join("-")}</p>
                  <AmendBooking prevCheckIn={checkIn} prevCheckOut={checkOut} bookingId={booking_id} refreshBookings={refreshBookings} />
                </PropertyCard>
              );
            })}
          </PropertyList>
        </>
      )}
    </>
  );
}
