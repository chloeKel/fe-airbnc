import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBackButton = styled(Link)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 8px;
  left: 16px;
  background: url("/assets/blueLeftArrow.svg") no-repeat center;
  background-size: contain;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
`;

export const StyledPropContainer = styled.div`
  width: 100vw;
  margin: 18vh auto 0;
  top: 0;
  bottom: 0;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StyledPropInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.8rem;
`;

export const StyledStatsDiv = styled.div`
  margin: auto;
  grid-direction: row;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const StyledHost = styled.div`
  display: flex;
  margin-top: auto;
`;

export const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  object-fit: cover;
`;
