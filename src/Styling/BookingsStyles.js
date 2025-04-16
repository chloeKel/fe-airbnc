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
  > *:first-child {
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  font-size: 1rem;
  border-bottom: 1px solid #2a5faf;
  border-top: 1px solid #2a5faf;
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
    padding: 1rem 1.5rem;
    border-left: 1px solid #2a5faf;
  }

  > *:first-child,
  > *:nth-child(2) {
    border-bottom: 1px solid #2a5faf;
  }
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  diplay: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
