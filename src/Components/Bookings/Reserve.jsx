import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext, ErrorContext } from "../../Contexts/Contexts";
import { setErrorMsg } from "../../Utils/setErrorMsg";
import { getCheckIn, getCheckOut } from "../../Utils/utils";
import { postBooking } from "../../Utils/api";
import { PopUpOverlay, PopUpContent, PopUpButton } from "../../Styling/PopUpStyles";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";

export default function Reserve() {
  const navigate = useNavigate();
  const { setError } = useContext(ErrorContext);
  const { id: guest } = useContext(UserContext);
  const { id: property } = useParams();
  const [checkIn, setCheckIn] = useState(getCheckIn());
  const [checkOut, setCheckOut] = useState(getCheckOut(checkIn));
  const [booking, setBooking] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await postBooking(guest, checkIn, checkOut, property);
      setBooking(data);
      setConfirmed(true);
    } catch (error) {
      setError(setErrorMsg(error.response));
    }
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
