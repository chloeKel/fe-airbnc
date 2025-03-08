import { useContext } from "react";
import { Button } from "../../Styling/StyledButton";
import { getTodaysDate, getCheckOut } from "../../Utils/utils";
import { ErrorContext } from "../../Contexts/Contexts";

export default function BookingForm({ handleSubmit, checkIn, checkOut, setCheckIn, setCheckOut }) {
  const { error } = useContext(ErrorContext);

  if (error) {
    setCheckIn(getTodaysDate());
    setCheckOut(checkIn);
  }

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
      <Button type="submit">Confirm</Button>
    </form>
  );
}
