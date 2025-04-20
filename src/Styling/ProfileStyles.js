import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: ${({ $height }) => $height};
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid #2a5faf;
  justify-content: center;
  align-items: center;
`;

export const StyledGridItem = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid #2a5faf;

  &:first-child {
    border-right: 1px solid #2a5faf;
  }

  &:last-child {
    border-left: 1px solid #2a5faf;
  }
`;

export const StyledProfileAsset = styled.img`
  width: 25px;
  height: auto;
  background: transparent !important;
  align-self: center;
  justify-self: center;
`;

export const StyledProfileForm = styled.form`
  height: ${({ $height }) => $height};
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledFormItem = styled.div`
  aspect-ratio: 1 / 0.4;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid #2a5faf;
  &:nth-child(odd) {
    border-right: 1px solid #2a5faf;
  }

  input[type="text"] {
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
  }
`;
