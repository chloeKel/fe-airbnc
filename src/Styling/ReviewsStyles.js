import styled from "styled-components";

export const StyledReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  height: fit-content;
  > *:first-child {
    border-left: 1px solid #2a5faf;
  }
`;

export const StyledReview = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #2a5faf;
`;

export const StyledText = styled.div`
  height: ${({ $height }) => $height};
  padding: 10px;
  border-top: 1px solid #2a5faf;
  border-right: 1px solid #2a5faf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledRating = styled.div`
  width: 100%;
  padding: 10px;
  border-top: 1px solid #2a5faf;
  border-right: 1px solid #2a5faf;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const StyledLeaveReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100vw;
  height: fit-content;
  padding-bottom: 1.5rem;

  > * {
    font-weight: 500;
  }

  > *:first-child {
    width: 100%;
    height: fit-content;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2a5faf;
    border-bottom: 1px solid #2a5faf;
  }
`;

export const StyledRatingBar = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  width: 50vw;
  background-color: transparent !important;
  background: transparent !important;
  padding: 0.5rem 0;
`;

export const StyledStarButton = styled.button`
  position: relative;
  width: 25px;
  height: 25px;
  background-image: url("/assets/ratingEmptyStar.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent !important;
  border: none;
  outline: none;
  box-shadow: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  transition: background-image 0.1s ease-in-out;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const StyledStarAsset = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
`;

export const StyledTextArea = styled.textarea`
  width: 50%;
  font-size: 16px;
  align-self: center;
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  resize: none;
  outline: none;
  background-color: #fefce8;
  color: #2a5faf;
  border: 1px solid #2a5faf;
  -webkit-text-fill-color: #2a5faf;
  -webkit-tap-highlight-color: transparent;

  &:-webkit-autofill {
    background-color: #fefce8 !important;
    -webkit-box-shadow: 0 0 0 1000px #fefce8 inset !important;
    -webkit-text-fill-color: #2a5faf !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    border: 2px solid #2a5faf;
    outline: none;
    background-color: #fefce8;
    color: #2a5faf;
    -webkit-text-fill-color: #2a5faf;
  }
`;
