import styled from "styled-components";

export const StyledPropContainer = styled.div`
  position: absolute;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 2rem;
`;

export const StyledHeading = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #2a5faf;
  padding: 1rem;
`;

export const StyledHost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #2a5faf;
`;

export const StyledPropInfo = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const StyledStatsDiv = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5rem 0;

  > * {
    border-top: 1px solid #2a5faf;
    border-bottom: 1px solid #2a5faf;
    border-right: 1px solid #2a5faf;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > *:last-child {
    border-right: none;
  }
`;

export const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  object-fit: cover;
`;
