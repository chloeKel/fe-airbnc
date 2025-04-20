import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useModalContext, useUserContext } from "../../Contexts/Contexts";
import { useBookingRequests } from "../../CustomHooks/useBookingRequests";
import { getTodaysDate, getCheckOut } from "../../Utils/utils";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import { StyledButton } from "../../Styling/ButtonStyles";

export default function Reserve({ height }) {
  const navigate = useNavigate();
  const { userId } = useUserContext();
  const { openModal, closeModal } = useModalContext();
  const { postBooking } = useBookingRequests();
  const { id: propertyId } = useParams();
  const [checkIn, setCheckIn] = useState(getTodaysDate());
  const [checkOut, setCheckOut] = useState(getCheckOut(checkIn));

  const handleBooking = async (e) => {
    e.preventDefault();
    const response = await postBooking(userId, checkIn, checkOut, propertyId);
    openModal(
      <>
        <BookingConfirmation msg={response.data.msg} checkIn={checkIn} checkOut={checkOut} />
        <StyledButton onClick={closeModal} $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
          Close
        </StyledButton>
        <StyledButton
          onClick={() => {
            navigate(`/users/${userId}/bookings`);
            closeModal();
          }}
          $width="40vw"
          $bordertop="1px solid #2a5faf"
          $borderleft="1px solid #2a5faf"
        >
          View Bookings
        </StyledButton>
      </>
    );
  };

  return <BookingForm handleSubmit={handleBooking} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} height={height} />;
}
