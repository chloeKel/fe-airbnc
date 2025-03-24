import { useState, useEffect } from "react";
import { useBookingRequests } from "../../CustomHooks/useBookingRequests";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import { StyledButton } from "../../Styling/ButtonStyles";
import { useModalContext } from "../../Contexts/Contexts";

export default function AmendBooking({ prevCheckIn, prevCheckOut, bookingId, setBookings, userId }) {
  const { fetchBookings, patchBooking, deleteBooking } = useBookingRequests();
  const { openModal, closeModal } = useModalContext();
  const [checkIn, setCheckIn] = useState(prevCheckIn);
  const [checkOut, setCheckOut] = useState(prevCheckOut);
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
          <StyledButton onClick={closeModal}>Close</StyledButton>
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
        <StyledButton onClick={closeModal}>Close</StyledButton>
      </>
    );
  };

  return (
    <>
      <StyledButton
        onClick={() => {
          openModal(
            <>
              <h3>Amend booking</h3>
              <BookingForm handleSubmit={handleAmend} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} />
              <StyledButton onClick={closeModal}>Close</StyledButton>
            </>
          );
        }}
      >
        Amend
      </StyledButton>
      <StyledButton
        onClick={() => {
          openModal(
            <>
              <h3>Cancel Booking</h3>
              <p>Are you sure you would like to cancel?</p>
              <StyledButton onClick={handleDelete}>Confirm</StyledButton>
              <StyledButton onClick={closeModal}>Close</StyledButton>
            </>
          );
        }}
      >
        Cancel
      </StyledButton>
    </>
  );
}
