import styled from "styled-components";

export const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const StyledMenuUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0;
`;

export const StyledMenuLi = styled.li`
text-decoration: none;
  font-size: 1.5em;
  font-weight: 400;
  transition: 200ms;
}
&a:hover {
  opacity:0.5;
}

`;

export const StyledMenuAvatar = styled.img`
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  object-fit: cover;
`;
