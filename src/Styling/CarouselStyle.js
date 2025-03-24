import styled from "styled-components";

export const StyledCarouselDiv = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const StyledCarouselUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  transform: ${({ $currentIndex }) => `translateX(-${$currentIndex * 100}%)`};
  transition: transform 0.3s ease-in-out;
  width: ${({ $images }) => `${$images.length * 100}%`};
`;

export const StyledCarouselLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  flex: 0 0 100%;
`;

export const StyledCarouselImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;
