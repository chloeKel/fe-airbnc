import styled from "styled-components";

export const FavouritesList = styled.article`
  position: absolute;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
`;

export const FavouriteCard = styled.div`
  height: ${({ $height }) => $height};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #2a5faf;
  &:nth-child(odd) {
    border-right: 1px solid #2a5faf;
  }

  > * {
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      border-top: none;
    }
  }
`;

export const FavouritesText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  z-index: 1;

  img {
    width: 50vw;
    height: auto;
    object-fit: cover;
  }
`;
