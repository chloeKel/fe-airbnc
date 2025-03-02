import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/Contexts";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { currentDate, futureDate } from "../../utils";
import { postBooking } from "../../api";
import { PopUpContent, PopUpOverlay, PopUpButton } from "../../Styling/PopUpStyles";
import BookingForm from "../Bookings/BookingForm";
import BookingConfirmation from "../Bookings/BookingConfirmation";

export default function Reserve() {
  const navigate = useNavigate();
  const { id: property } = useParams();
  const { id: guest } = useContext(UserContext);
  const [checkIn, setCheckIn] = useState(currentDate());
  const [checkOut, setCheckOut] = useState(futureDate());
  const [booking, setBooking] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await postBooking(guest, checkIn, checkOut, property);
    setBooking(data);
    setConfirmed(true);
  };

  return (
    <>
      <BookingForm handleSubmit={handleSubmit} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} />

      {confirmed ? (
        <PopUpOverlay>
          <PopUpContent>
            <BookingConfirmation msg={booking.msg} checkIn={checkIn} checkOut={checkOut} />
            <PopUpButton onClick={() => setConfirmed(false)}>Close</PopUpButton>
            <PopUpButton onClick={() => navigate(`/users/${guest}/bookings`)}>View Bookings</PopUpButton>
          </PopUpContent>
        </PopUpOverlay>
      ) : null}
    </>
  );
}
