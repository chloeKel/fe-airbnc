import styled from "styled-components";

export const StyledBookingsUl = styled.ul`
  width: 100vw;
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledManageBooking = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #2a5faf;
  &:first-of-type {
    border-top: none;
  }
`;

export const StyledBookingsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  align-self: center;
  padding: 0.5rem 0.5rem;
`;

export const StyledBookingsLi = styled.li`
  width: 100%;
  height: ${({ $height }) => $height};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  font-size: 1rem;
  border-bottom: 1px solid #2a5faf;
`;

export const StyledInfo = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, 1fr);
  font-weight: 500;
  text-align: center;

  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    border-left: 1px solid #2a5faf;
    height: ${({ $height }) => $height};
  }

  > :nth-child(1),
  > :nth-child(2) {
    border-bottom: 1px solid #2a5faf;
  }
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  height: ${({ $height }) => $height || "fit-content"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
`;

export const StyledPanelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  border-top: 1px solid #2a5faf;
`;

export const StyledPanelAsset = styled.img`
  width: 40px;
  height: auto;
  background: transparent !important;
  align-self: center;
  justify-self: center;
`;
