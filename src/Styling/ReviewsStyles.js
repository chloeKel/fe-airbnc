import styled from "styled-components";

export const StyledReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
`;

export const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #2a5faf;
  &:first-child {
    border-left: 1px solid #2a5faf;
  }
`;

export const StyledText = styled.div`
  width: 50vw;
  height: auto;
  padding: 10px;
  border-bottom: 1px solid #2a5faf;
  border-right: 1px solid #2a5faf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledRating = styled.div`
  width: 50vw;
  padding: 10px;
  border-bottom: 1px solid #2a5faf;
  border-right: 1px solid #2a5faf;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
