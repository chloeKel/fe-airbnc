export default function BookingConfirmation({ msg, checkIn, checkOut }) {
  return (
    <>
      <h2>{msg}</h2>
      <p>Check-in: {checkIn}</p>
      <p>Check-out: {checkOut}</p>
    </>
  );
}
