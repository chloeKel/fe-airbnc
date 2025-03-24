export default function BookingConfirmation({ msg, checkIn, checkOut }) {
  return (
    <>
      <h2>{msg}</h2>
      <p>Check-in: {checkIn.split("-").reverse().join("-")}</p>
      <p>Check-out: {checkOut.split("-").reverse().join("-")}</p>
    </>
  );
}
