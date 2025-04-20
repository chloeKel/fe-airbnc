import styled from "styled-components";

export const StyledPropContainer = styled.div`
  position: absolute;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledHeading = styled.div`
  width: 100%;
  height: ${({ $height }) => $height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #2a5faf;
  padding: 1rem;
`;

export const StyledHost = styled.div`
  width: 100%;
  height: ${({ $height }) => $height};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #2a5faf;
  margin-bottom: 0.5rem;
`;

export const StyledPropInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledStatsDiv = styled.div`
  width: 100%;
  height: ${({ $height }) => $height};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 1px solid #2a5faf;
  margin-top: 0.5rem;

  > * {
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

export const StyledDesc = styled.p`
  width: 100%;
  height: ${({ $height }) => $height};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-right: 1rem;
  padding-left: 1rem;
  border-bottom: 1px solid #2a5faf;
`;
