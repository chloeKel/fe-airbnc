import styled from "styled-components";

export const StyledBookingForm = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

export const StyledBookingDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

export const StyledBookingLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledDateInput = styled.input`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  width: 150px;
  background-color: #ffffff;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 2px;
  margin: 5px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  outline: none;

  &:focus {
    border-color: #000000;
  }
`;
