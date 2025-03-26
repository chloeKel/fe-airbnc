import { useState, useEffect } from "react";
import { StyledButton } from "../../Styling/ButtonStyles";
import { getCheckOut } from "../../Utils/utils";
import { StyledBookingDiv, StyledBookingForm, StyledBookingLabel, StyledDateInput } from "../../Styling/InputStyles";

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
    <StyledBookingDiv>
      <StyledBookingForm onSubmit={handleSubmit}>
        <StyledBookingLabel>
          Check In Date
          <StyledDateInput
            type="date"
            value={arrivePicker}
            onChange={(e) => {
              const arrive = e.target.value;
              const depart = getCheckOut(arrive);
              setArrivePicker(arrive);
              setDepartPicker(depart);
            }}
          />
        </StyledBookingLabel>
        <StyledBookingLabel>
          Check Out Date
          <StyledDateInput
            type="date"
            value={departPicker}
            onChange={(e) => {
              const depart = e.target.value;
              setDepartPicker(depart);
            }}
          />
        </StyledBookingLabel>
        <StyledButton type="submit">Confirm</StyledButton>
      </StyledBookingForm>
    </StyledBookingDiv>
  );
}
