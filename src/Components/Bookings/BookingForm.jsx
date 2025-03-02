import { PopUpButton } from "../../Styling/PopUpStyles";

export default function BookingForm({ handleSubmit, checkIn, checkOut, setCheckIn, setCheckOut }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        CHECK-IN
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </label>
      <label>
        CHECK-OUT
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </label>
      <PopUpButton type="submit">Confirm</PopUpButton>
    </form>
  );
}
