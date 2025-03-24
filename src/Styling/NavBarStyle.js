import styled from "styled-components";

export const StyledNavUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledNavLi = styled.li`
  text-align: center;
  padding: 16px;
`;

export const StyledNavAvatar = styled.img`
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
  object-fit: cover;
`;
