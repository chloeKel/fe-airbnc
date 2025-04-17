import { useState, useEffect } from "react";
import { StyledButton } from "../../Styling/ButtonStyles";
import { getCheckOut } from "../../Utils/utils";
import useMeasure from "../../CustomHooks/useMeasure";
import { StyledBookingDiv, StyledBookingForm, StyledDateInput } from "../../Styling/InputStyles";

export default function BookingForm({ handleSubmit, checkIn, checkOut, setCheckIn, setCheckOut }) {
  const [arrivePicker, setArrivePicker] = useState(checkIn);
  const [departPicker, setDepartPicker] = useState(checkOut);
  const {
    measureRef,
    dimensions: { width },
  } = useMeasure();

  useEffect(() => {
    if (arrivePicker !== checkIn && departPicker !== checkOut) {
      setCheckIn(arrivePicker);
      setCheckOut(departPicker);
    }
  }, [checkIn, checkOut, setCheckIn, setCheckOut, arrivePicker, departPicker]);

  return (
    <StyledBookingDiv>
      <StyledBookingForm onSubmit={handleSubmit}>
        <label>
          Check In Date
          <StyledDateInput
            ref={measureRef}
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
          Check Out Date
          <StyledDateInput
            type="date"
            value={departPicker}
            onChange={(e) => {
              const depart = e.target.value;
              setDepartPicker(depart);
            }}
          />
        </label>
      </StyledBookingForm>
      <StyledButton type="submit" $width={`${width}px`} $color="#fefce8" $background="#2a5faf">
        Confirm
      </StyledButton>
    </StyledBookingDiv>
  );
}
