import styled from "styled-components";

export const PropertyList = styled.ul`
  list-style-type: none;
  padding: 0;
  border-style: solid;
  border-color: red;
`;

export const PropertyCard = styled.li`
  border-style: solid;
  border-color: blue;
`;

export const PropertyImage = styled.img`
  width: 90vw;
  height: auto;
  border-radius: 10px;
`;

export const FavouriteButton = styled.button`
  background: ${({ $asset }) => `url(${$asset})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent !important;
  outline: none;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;
`;
