import styled from "styled-components";

export const StyledPropContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
`;

export const StyledStatsDiv = styled.div`
  margin: auto;
  grid-direction: row;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const StyledHost = styled.div`
  display: flex;
  margin-top: auto;
`;

export const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  object-fit: cover;
`;

// export const StyledHost = styled.div`
//   background-color: #f9f9f9;
//   border: 1px solid #ddd;
//   border-radius: 12px;
//   padding: 16px;
//   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
//   max-width: 250px;
//   text-align: center;
//   font-size: 1rem;
// `;

// export const StyledPropContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// `;

// export const StyledStatsDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   text-align: center;
//   background-color: #f9f9f9;
//   border: 1px solid #ddd;
//   border-radius: 12px;
//   padding: 16px;
//   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
//   font-size: 1rem;
// `;
