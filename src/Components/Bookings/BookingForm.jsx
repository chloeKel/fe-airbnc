import { useState, useEffect } from "react";
import { StyledButton } from "../../Styling/ButtonStyles";
import { getCheckOut } from "../../Utils/utils";

export default function BookingForm({ handleSubmit, checkIn, checkOut, setCheckIn, setCheckOut }) {
  const [arrivePicker, setArrivePicker] = useState(checkIn);
  const [departPicker, setDepartPicker] = useState(checkOut);

  useEffect(() => {
    if (arrivePicker !== checkIn && departPicker !== checkOut) {
      setCheckIn(arrivePicker);
      setCheckOut(departPicker);
    }
  }, [checkIn, checkOut, setCheckIn, setCheckOut, arrivePicker, departPicker]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        CHECK-IN
        <input
          type="date"
          value={arrivePicker}
          onChange={(e) => {
            const arrive = e.target.value;
            const depart = getCheckOut(arrive);
            setArrivePicker(arrive);
            setDepartPicker(depart);
          }}
        />
      </label>
      <label>
        CHECK-OUT
        <input
          type="date"
          value={departPicker}
          onChange={(e) => {
            const depart = e.target.value;
            setDepartPicker(depart);
          }}
        />
      </label>
      <StyledButton type="submit">Confirm</StyledButton>
    </form>
  );
}
