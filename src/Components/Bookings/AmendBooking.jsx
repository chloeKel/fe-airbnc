import { useState, useEffect } from "react";
import { deleteBooking, patchBooking } from "../../api";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import { PopUpOverlay, PopUpContent, PopUpButton } from "../../Styling/PopUpStyles";

export default function AmendBooking({ prevCheckIn, prevCheckOut, id, renderBookings }) {
  const [display, setDisplay] = useState(false);
  const [status, setStatus] = useState(null);
  const [booking, setBooking] = useState({});
  const [checkIn, setCheckIn] = useState(prevCheckIn);
  const [checkOut, setCheckOut] = useState(prevCheckOut);

  const handleAmend = async (e) => {
    e.preventDefault();
    const response = await patchBooking(id, checkIn, checkOut);
    setBooking(response);
    setStatus("amended");
    renderBookings();
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await deleteBooking(id);
    setStatus("cancelled");
  };

  const handleState = (boolean, sts) => {
    setDisplay(boolean);
    setStatus(sts);
  };

  return (
    <>
      <button onClick={() => handleState(true, "amend")}>Amend</button>
      <button onClick={() => handleState(true, "cancel")}>Cancel</button>

      {display && (
        <PopUpOverlay>
          <PopUpContent>
            {status === "amend" ? (
              <>
                <h3>Amend booking</h3>
                <BookingForm handleSubmit={handleAmend} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} />
                <PopUpButton onClick={() => handleState(false, null)}>Close</PopUpButton>
              </>
            ) : null}
            {status === "amended" ? (
              <>
                <BookingConfirmation msg="Booking updated" checkIn={checkIn} checkOut={checkOut} />
                <PopUpButton onClick={() => handleState(false, null)}>Close</PopUpButton>
              </>
            ) : null}
            {status === "cancel" ? (
              <>
                <h3>Cancel Booking</h3>
                <p>Are you sure you would like to cancel?</p>
                <PopUpButton onClick={handleDelete}>Confirm</PopUpButton>
                <PopUpButton onClick={() => handleState(false, null)}>Close</PopUpButton>
              </>
            ) : null}
            {status === "cancelled" ? (
              <>
                <p>Your booking has been cancelled</p>
                <PopUpButton
                  onClick={() => {
                    handleState(false, null);
                    renderBookings();
                  }}
                >
                  Close
                </PopUpButton>
              </>
            ) : null}
          </PopUpContent>
        </PopUpOverlay>
      )}
    </>
  );
}
