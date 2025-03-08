import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext, ErrorContext } from "../../Contexts/Contexts";
import { getTodaysDate, getCheckOut } from "../../Utils/utils";
import { postBooking } from "../../Utils/api";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import { PopUpOverlay, PopUpContent } from "../../Styling/StyledPopUp";
import { Button } from "../../Styling/StyledButton";

export default function Reserve() {
  const navigate = useNavigate();
  const { setError } = useContext(ErrorContext);
  const { userId } = useContext(UserContext);
  const { id: propertyId } = useParams();
  const [checkIn, setCheckIn] = useState(getTodaysDate());
  const [checkOut, setCheckOut] = useState(getCheckOut(checkIn));
  const [booking, setBooking] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await postBooking(userId, checkIn, checkOut, propertyId);
      setBooking(data);
      setConfirmed(true);
    } catch (error) {
      console.log("error captured in error Reserve:", error);
      setError(error);
    }
  };

  return (
    <>
      <BookingForm handleSubmit={handleSubmit} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} />

      {confirmed ? (
        <PopUpOverlay>
          <PopUpContent>
            <BookingConfirmation msg={booking.msg} checkIn={checkIn} checkOut={checkOut} />
            <Button onClick={() => setConfirmed(false)}>Close</Button>
            <Button onClick={() => navigate(`/users/${userId}/bookings`)}>View Bookings</Button>
          </PopUpContent>
        </PopUpOverlay>
      ) : null}
    </>
  );
}
