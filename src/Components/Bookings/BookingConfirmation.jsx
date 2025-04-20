import { getBookingDuration } from "../../Utils/utils";

export default function BookingConfirmation({ msg, checkIn, checkOut }) {
  return (
    <>
      <h3>{msg}</h3>
      <p>{getBookingDuration(checkIn, checkOut)}</p>
    </>
  );
}
