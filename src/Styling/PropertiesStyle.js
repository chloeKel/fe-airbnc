import styled from "styled-components";

export const StyledPropsContainer = styled.div`
  position: relative;
  top: ${({ $height }) => $height};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledRatingAsset = styled.img`
  width: 15px;
  height: auto;
  background: transparent !important;
  align-self: center;
  justify-self: center;
`;

export const StyledPropsWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4;
  grid-template-areas:
    "a a"
    "b b"
    "c d"
    "c e";
  text-align: center;
`;

export const StyledName = styled.div`
  grid-area: a;
  height: ${({ $height }) => $height};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid #2a5faf;
`;

export const StyledCarouselContainer = styled.li`
  grid-area: b;
  padding: 0.5rem;
`;

export const StyledLocation = styled.li`
  grid-area: c;
  height: ${({ $height }) => $height};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #2a5faf;
  border-bottom: 1px solid #2a5faf;
  border-right: 1px solid #2a5faf;
`;

export const StyledPrice = styled.li`
  grid-area: d;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #2a5faf;
`;

export const StyledRating = styled.li`
  grid-area: e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #2a5faf;
  border-bottom: 1px solid #2a5faf;
`;
