import styled from "styled-components";

export const StyledPropsContainer = styled.div`
  position: relative;
  top: ${({ $height }) => $height};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  // border: 2px dashed blue;
  // background: rgba(0, 0, 255, 0.1);
`;

export const StyledRatingAsset = styled.img`
  width: 20px;
  height: 20px;
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

export const StyledName = styled.li`
  grid-area: a;
  border-bottom: 1px solid #2a5faf;
  height: fit-content;
  padding: 2.2rem;
`;

export const StyledCarouselContainer = styled.li`
  grid-area: b;
  padding: 0.5rem;
`;

export const StyledLocation = styled.li`
  grid-area: c;
  border-top: 1px solid #2a5faf;
  border-bottom: 1px solid #2a5faf;
  border-right: 1px solid #2a5faf;
  line-height: 5rem;
`;

export const StyledPrice = styled.li`
  grid-area: d;
  border-top: 1px solid #2a5faf;
  padding: 0.5rem;
`;

export const StyledRating = styled.li`
  grid-area: e;
  border-top: 1px solid #2a5faf;
  border-bottom: 1px solid #2a5faf;
  padding: 0.5rem;
`;
