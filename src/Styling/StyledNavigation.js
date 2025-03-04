import styled from "styled-components";

export const StyledNavigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-style: solid;
  border-color: green;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledList = styled.li`
  text-align: center;
  padding: 16px;

  img {
    width: 6vw;
    height: 6vw;
    border-radius: 50%;
    object-fit: cover;
  }

  border-style: solid;
  border-color: purple;
`;
