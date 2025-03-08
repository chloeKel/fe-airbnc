import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../Contexts/Contexts";
import useBookingRequests from "../../CustomHooks/useBookingRequests";
import { getTodaysDate, getCheckOut } from "../../Utils/utils";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import { PopUpOverlay, PopUpContent } from "../../Styling/StyledPopUp";
import { Button } from "../../Styling/StyledButton";

export default function Reserve() {
  const navigate = useNavigate();
  const { postBooking } = useBookingRequests();
  const { userId } = useContext(UserContext);
  const { id: propertyId } = useParams();
  const [checkIn, setCheckIn] = useState(getTodaysDate());
  const [checkOut, setCheckOut] = useState(getCheckOut(checkIn));
  const [booking, setBooking] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postBooking(userId, checkIn, checkOut, propertyId);
    setBooking(response);
    setConfirmed(true);
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
