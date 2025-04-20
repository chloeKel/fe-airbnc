import { useState, useEffect } from "react";
import { StyledButton } from "../../Styling/ButtonStyles";
import { getCheckOut, getTodaysDate } from "../../Utils/utils";
import { StyledBookingDiv, StyledBookingForm, StyledDateInput } from "../../Styling/InputStyles";
import { StyledButtonContainer } from "../../Styling/BookingsStyles";

export default function BookingForm({ handleSubmit, checkIn, checkOut, setCheckIn, setCheckOut, height }) {
  const [arrivePicker, setArrivePicker] = useState(checkIn);
  const [departPicker, setDepartPicker] = useState(checkOut);

  useEffect(() => {
    if (arrivePicker !== checkIn && departPicker !== checkOut) {
      setCheckIn(arrivePicker);
      setCheckOut(departPicker);
    }
  }, [checkIn, checkOut, setCheckIn, setCheckOut, arrivePicker, departPicker]);

  return (
    <StyledBookingForm onSubmit={handleSubmit}>
      <StyledBookingDiv>
        <label>Check In Date</label>
        <StyledDateInput
          type="date"
          min={getTodaysDate()}
          value={arrivePicker}
          onChange={(e) => {
            const arrive = e.target.value;
            const depart = getCheckOut(arrive);
            setArrivePicker(arrive);
            setDepartPicker(depart);
          }}
        />

        <label>Check Out Date</label>
        <StyledDateInput
          type="date"
          min={getTodaysDate()}
          value={departPicker}
          onChange={(e) => {
            const depart = e.target.value;
            setDepartPicker(depart);
          }}
        />
      </StyledBookingDiv>
      <StyledButtonContainer $height={`${height}px`}>
        <StyledButton type="submit" $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
          Confirm
        </StyledButton>
      </StyledButtonContainer>
    </StyledBookingForm>
  );
}
