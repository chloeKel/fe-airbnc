import { useState } from "react";
import useBookingRequests from "../../CustomHooks/useBookingRequests";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import { Button } from "../../Styling/StyledButton";
import { useModalContext } from "../../Contexts/Contexts";

export default function AmendBooking({ prevCheckIn, prevCheckOut, bookingId }) {
  const { patchBooking, deleteBooking } = useBookingRequests();
  const { openModal, closeModal } = useModalContext();
  const [checkIn, setCheckIn] = useState(prevCheckIn);
  const [checkOut, setCheckOut] = useState(prevCheckOut);

  // infinite loop happening here

  const handleAmend = async (e) => {
    e.preventDefault();
    await patchBooking(bookingId, checkIn, checkOut);
    openModal(
      <>
        <BookingConfirmation msg="Booking updated" checkIn={checkIn} checkOut={checkOut} />
        <Button onClick={closeModal}>Close</Button>
      </>
    );
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteBooking(bookingId);
    openModal(
      <>
        <p>Your booking has been cancelled</p>
        <Button onClick={closeModal}>Close</Button>
      </>
    );
  };

  return (
    <>
      <button
        onClick={() => {
          openModal(
            <>
              <h3>Amend booking</h3>
              <BookingForm handleSubmit={handleAmend} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} />
              <Button onClick={closeModal}>Close</Button>
            </>
          );
        }}
      >
        Amend
      </button>
      <button
        onClick={() => {
          openModal(
            <>
              <h3>Cancel Booking</h3>
              <p>Are you sure you would like to cancel?</p>
              <Button onClick={handleDelete}>Confirm</Button>
              <Button onClick={closeModal}>Close</Button>
            </>
          );
        }}
      >
        Cancel
      </button>
    </>
  );
}
