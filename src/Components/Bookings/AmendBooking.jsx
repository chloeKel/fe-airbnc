import { useState, useContext } from "react";
import { deleteBooking, patchBooking } from "../../Utils/api";
import { ErrorContext } from "../../Contexts/Contexts";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import { PopUpOverlay, PopUpContent } from "../../Styling/StyledPopUp";
import { Button } from "../../Styling/StyledButton";

export default function AmendBooking({ prevCheckIn, prevCheckOut, id, renderBookings }) {
  const { setError } = useContext(ErrorContext);
  const [display, setDisplay] = useState(false);
  const [status, setStatus] = useState(null);
  const [checkIn, setCheckIn] = useState(prevCheckIn);
  const [checkOut, setCheckOut] = useState(prevCheckOut);

  const handleAmend = async (e) => {
    try {
      e.preventDefault();
      await patchBooking(id, checkIn, checkOut);
      setStatus("amended");
      renderBookings();
    } catch (error) {
      console.log("error captured in handle AmendBooking:", error);
      setError(error);
    }
  };

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await deleteBooking(id);
      setStatus("cancelled");
    } catch (error) {
      console.log("error captured in handleDeleteBooking:", error);
      setError(error);
    }
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
                <Button onClick={() => handleState(false, null)}>Close</Button>
              </>
            ) : null}
            {status === "amended" ? (
              <>
                <BookingConfirmation msg="Booking updated" checkIn={checkIn} checkOut={checkOut} />
                <Button onClick={() => handleState(false, null)}>Close</Button>
              </>
            ) : null}
            {status === "cancel" ? (
              <>
                <h3>Cancel Booking</h3>
                <p>Are you sure you would like to cancel?</p>
                <Button onClick={handleDelete}>Confirm</Button>
                <Button onClick={() => handleState(false, null)}>Close</Button>
              </>
            ) : null}
            {status === "cancelled" ? (
              <>
                <p>Your booking has been cancelled</p>
                <Button
                  onClick={() => {
                    handleState(false, null);
                    renderBookings();
                  }}
                >
                  Close
                </Button>
              </>
            ) : null}
          </PopUpContent>
        </PopUpOverlay>
      )}
    </>
  );
}
