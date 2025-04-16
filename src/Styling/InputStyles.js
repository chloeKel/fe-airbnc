import styled from "styled-components";

export const StyledBookingForm = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledBookingDiv = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  jusify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledDateInput = styled.input`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 0.5rem 0;
  padding: 0.2rem 0.2rem;
  width: fit-content;
  background-color: #fefce8;
  color: #2a5faf;
  border: 1px solid #2a5faf;
  font-family: "Satoshi", sans-serif;
  line-height: 1.5;
  font-weight: 500;
  font-size: 1rem;
  outline: none;
  -webkit-appearance: none;

  &:focus {
    border: 2px solid #2a5faf;
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    position: relative;
    background-image: url("/assets/calendar.svg");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 1rem;
  }
`;
