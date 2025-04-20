import { useState, useEffect } from "react";
import { useBookingRequests } from "../../CustomHooks/useBookingRequests";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import { StyledButton } from "../../Styling/ButtonStyles";
import { useModalContext } from "../../Contexts/Contexts";
import LeaveReview from "../Reviews/LeaveReview";
import { StyledButtonContainer } from "../../Styling/BookingsStyles";

export default function AmendBooking({ prevCheckIn, prevCheckOut, bookingId, setBookings, userId, propId, height }) {
  const { fetchBookings, patchBooking, deleteBooking } = useBookingRequests();
  const { openModal, closeModal } = useModalContext();
  const [checkIn, setCheckIn] = useState(prevCheckIn);
  const [checkOut, setCheckOut] = useState(prevCheckOut);
  const [isAmendOpen, setIsAmendOpen] = useState(false);
  const [isCloseOpen, setIsCloseOpen] = useState(false);
  const [isAmended, setIsAmended] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      fetchBookings(userId).then((res) => setBookings(res));
      setRefresh(false);
    }
  }, [refresh, fetchBookings, userId, setBookings, setRefresh]);

  const handleAmend = async (e) => {
    e.preventDefault();
    setIsAmended(true);
  };

  if (isAmended) {
    (async () => {
      await patchBooking(bookingId, checkIn, checkOut);
      setRefresh(true);
      openModal(
        <>
          <BookingConfirmation msg="Booking updated" checkIn={checkIn} checkOut={checkOut} />
          <StyledButton onClick={closeModal} $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
            Close
          </StyledButton>
        </>
      );
      setIsAmended(false);
    })();
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteBooking(bookingId);
    setRefresh(true);
    openModal(
      <>
        <p>Your booking has been cancelled</p>
        <StyledButton onClick={closeModal} $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
          Close
        </StyledButton>
      </>
    );
  };

  const isTimeForReview = (d) => {
    const date = new Date();
    const checkOut = new Date(d);
    return date.getTime() > checkOut.getTime();
  };

  return (
    <>
      {isTimeForReview(checkOut) ? (
        <LeaveReview propId={propId} checkOut={checkOut} />
      ) : (
        !isAmendOpen &&
        !isCloseOpen && (
          <StyledButtonContainer $height={`${height}px`}>
            <StyledButton onClick={() => setIsAmendOpen(true)} $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
              Amend
            </StyledButton>
            <StyledButton onClick={() => setIsCloseOpen(true)} $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
              Cancel
            </StyledButton>
          </StyledButtonContainer>
        )
      )}
      {isAmendOpen && (
        <div style={{ paddingBottom: "1rem" }}>
          <BookingForm handleSubmit={handleAmend} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} />
          <StyledButton onClick={() => setIsAmendOpen(false)} $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
            Close
          </StyledButton>
        </div>
      )}
      {isCloseOpen && (
        <div style={{ paddingTop: "1rem" }}>
          <p>Are you sure you would like to cancel?</p>
          <StyledButtonContainer>
            <StyledButton onClick={handleDelete} $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
              Confirm
            </StyledButton>
            <StyledButton onClick={() => setIsCloseOpen(false)} $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
              Close
            </StyledButton>
          </StyledButtonContainer>
        </div>
      )}
    </>
  );
}
