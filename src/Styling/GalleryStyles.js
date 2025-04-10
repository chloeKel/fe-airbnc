import styled from "styled-components";

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 0.5rem;
  border-bottom: 1px solid #2a5faf;
`;

export const StyledThumbnails = styled.div`
  display: flex;
  padding-top: 2px;
  overflow-x: auto;
`;

export const StyledThumbnail = styled.img`
  width: ${(props) => props.width}vw;
  height: auto
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
`;
