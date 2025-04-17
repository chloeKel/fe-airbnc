import { getBookingDuration } from "../../Utils/utils";

export default function BookingConfirmation({ msg, checkIn, checkOut }) {
  return (
    <>
      <h2>{msg}</h2>
      <p>{getBookingDuration(checkIn, checkOut)}</p>
    </>
  );
}
