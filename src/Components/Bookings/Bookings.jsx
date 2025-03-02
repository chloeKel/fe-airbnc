import { useState, useEffect, useContext } from "react";
import { ErrorContext, UserContext } from "../../Contexts/Contexts";
import { Link } from "react-router-dom";
import { fetchBookings } from "../../api";
import AmendBooking from "./AmendBooking";
import { formatDateString } from "../../utils";

export default function Bookings() {
  const { id } = useContext(UserContext);
  const { setError, setMsg } = useContext(ErrorContext);
  const [bookings, setBookings] = useState([]);

  const renderBookings = async () => {
    try {
      const { bookings } = await fetchBookings(id);
      setBookings(bookings);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    renderBookings();
  }, [setError]);

  return (
    <>
      <h2>Your Bookings</h2>
      <ul className="bookings">
        {bookings.map((booking, index) => {
          const { booking_id, image, check_in_date, check_out_date, property_id, property_name } = booking;
          const checkIn = formatDateString(check_in_date);
          const checkOut = formatDateString(check_out_date);

          return (
            <li key={`${booking_id}-${index}`}>
              <img src={image} alt={property_name} />
              <h3>
                <Link to={`/property/${property_id}`}>{property_name}</Link>
              </h3>
              <p>Booking reference: {booking_id}</p>
              <p>Check-in-date: {checkIn.split("-").reverse().join("-")}</p>
              <p>Check-out-date: {checkOut.split("-").reverse().join("-")}</p>
              <AmendBooking prevCheckIn={checkIn} prevCheckOut={checkOut} id={booking_id} renderBookings={renderBookings} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
