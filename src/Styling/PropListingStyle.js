import styled from "styled-components";

export const StyledPropContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const StyledStatsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
`;

export const StyledHost = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
  font-size: 1rem;
`;

export const StyledAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;
