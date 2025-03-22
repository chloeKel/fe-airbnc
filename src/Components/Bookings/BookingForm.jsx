import { StyledButton } from "../../Styling/StyledButton";
import { getCheckOut } from "../../Utils/utils";

export default function BookingForm({ handleSubmit, checkIn, checkOut, setCheckIn, setCheckOut }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        CHECK-IN
        <input
          type="date"
          value={checkIn}
          onChange={(e) => {
            setCheckIn(e.target.value);
            setCheckOut(getCheckOut(e.target.value));
          }}
        />
      </label>
      <label>
        CHECK-OUT
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </label>
      <StyledButton type="submit">Confirm</StyledButton>
    </form>
  );
}
