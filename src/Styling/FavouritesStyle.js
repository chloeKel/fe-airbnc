import styled from "styled-components";

export const FavouritesList = styled.article`
  position: absolute;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const FavouriteCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const FavouritesText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 0;
  padding: 0;
`;

export const FavouritesImage = styled.div`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
`;
