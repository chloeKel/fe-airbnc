import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useModalContext, useUserContext } from "../../Contexts/Contexts";
import useBookingRequests from "../../CustomHooks/useBookingRequests";
import { getTodaysDate, getCheckOut } from "../../Utils/utils";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import { StyledButton } from "../../Styling/StyledButton";

export default function Reserve() {
  const navigate = useNavigate();
  const { userId } = useUserContext();
  const { openModal, closeModal } = useModalContext();
  const { postBooking } = useBookingRequests();
  const { id: propertyId } = useParams();
  const [checkIn, setCheckIn] = useState(getTodaysDate());
  const [checkOut, setCheckOut] = useState(getCheckOut(checkIn));
  const [booking, setBooking] = useState({});

  const handleBooking = async (e) => {
    e.preventDefault();
    const response = await postBooking(userId, checkIn, checkOut, propertyId);
    setBooking(response);
    openModal(
      <>
        <BookingConfirmation msg={booking.msg} checkIn={checkIn} checkOut={checkOut} />
        <StyledButton onClick={closeModal}>Close</StyledButton>
        <StyledButton
          onClick={() => {
            navigate(`/users/${userId}/bookings`);
            closeModal();
          }}
        >
          View Bookings
        </StyledButton>
      </>
    );
  };

  return <BookingForm handleSubmit={handleBooking} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} />;
}
