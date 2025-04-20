import styled from "styled-components";

export const StyledBookingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: fit-content;
`;

export const StyledBookingDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;

  > * {
    width: 100%;
    height: 15vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem 0;
    border-bottom: 1px solid #2a5faf;
  }
`;

export const StyledDateInput = styled.input`
  width: 100%;
  height: 15vw;
  align-self: center;
  justify-self: center;
  text-align: center;
  background-color: #fefce8;
  color: #2a5faf;
  border-bottom: 1px solid #2a5faf;
  border-left: 1px solid #2a5faf;
  border-top: none !important;
  border-right: none !important;
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
