import styled from "styled-components";

export const StyledReviewsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  overflow-x: scroll;
`;

export const StyledReview = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 1px solid #2a5faf;
  height: fit-content;
  line-height: 1.5rem;
  padding: 0.5rem auto;
`;

export const StyledGuest = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: fit-content;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #2a5faf;
`;
