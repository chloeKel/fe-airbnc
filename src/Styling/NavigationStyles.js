import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavDiv = styled.div`
  background-color: #1007fa;
  width: 100%;
  padding: 15px 5px 15px 5px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  gap: 12px;
  border-bottom: 2px solid #ff7448;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.color};
  font-family: "Fraunces", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: "SOFT" 0, "WONK" 0;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-size: 15px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1.2px;
    bottom: 0;
    left: 0;
    background-color: #ff7448;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    content: "";
    transform: scaleX(1);
  }
`;
