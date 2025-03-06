import styled from "styled-components";

export const FavouritesList = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 10px;
  border-style: solid;
  border-color: red;
`;

export const FavouriteCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: blue;
`;

export const FavouritesText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 0;
  padding: 0;
  border-style: solid;
  border-color: orange;
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
  border-style: solid;
  border-color: purple;
`;
