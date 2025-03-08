import { useState, useEffect, useContext, useCallback } from "react";
import { ErrorContext, UserContext } from "../../Contexts/Contexts";
import { Link } from "react-router-dom";
import { formatDateString } from "../../Utils/utils";
import { fetchBookings } from "../../Utils/api";
import AmendBooking from "./AmendBooking";
import DefaultContent from "../DefaultContent";
import { PropertyCard, PropertyImage, PropertyList } from "../../Styling/StyledPropertyCard";

export default function Bookings() {
  const { userId } = useContext(UserContext);
  const { setError } = useContext(ErrorContext);
  const [bookings, setBookings] = useState([]);

  const renderBookings = useCallback(async () => {
    try {
      const { bookings } = await fetchBookings(userId);
      setBookings(bookings);
    } catch (error) {
      console.log("error captured in Bookings:", error);
      setError(error);
    }
  }, []);

  useEffect(() => {
    renderBookings();
  }, [renderBookings]);

  return (
    <>
      {bookings.length === 0 ? (
        <DefaultContent component="bookings" />
      ) : (
        <>
          <h2>Your Bookings</h2>
          <PropertyList>
            {bookings.map((booking, index) => {
              const { booking_userId, image, check_in_date, check_out_date, property_userId, property_name } = booking;
              const checkIn = formatDateString(check_in_date);
              const checkOut = formatDateString(check_out_date);
              return (
                <PropertyCard key={`${booking_userId}-${index}`}>
                  <PropertyImage src={image} alt={property_name} />
                  <h3>
                    <Link to={`/property/${property_userId}`}>{property_name}</Link>
                  </h3>
                  <p>Booking reference: {booking_userId}</p>
                  <p>Check-in-date: {checkIn.split("-").reverse().join("-")}</p>
                  <p>Check-out-date: {checkOut.split("-").reverse().join("-")}</p>
                  <AmendBooking prevCheckIn={checkIn} prevCheckOut={checkOut} userId={booking_userId} renderBookings={renderBookings} />
                </PropertyCard>
              );
            })}
          </PropertyList>
        </>
      )}
    </>
  );
}
