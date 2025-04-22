import { styled } from "styled-components";

export const StyledFiltersContainer = styled.div`
  width: 100vw;
  position: fixed;
  top: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #fefce8;
  z-index: 1000;
`;

export const StyledFilterContainer = styled.div`
  font-family: inherit;
  font-size: inherit;
  background: #fefce8;
  width: 50%;
  > *:last-child {
    border-right: none;
  }
`;

export const StyledArrowAsset = styled.img`
  width: 1rem;
  height: auto;
  background: transparent !important;
`;

export const StyledDropdown = styled.ul`
  width: 100%;
  list-style: none;
  position: relative;
  left: 0;
  margin-right: 0.2rem;
  background: #fefce8;
  text-align: right;
  display: flex;
  flex-direction: column;
`;

export const StyledOptions = styled.li`
  width: 100%;
  cursor: pointer;
  position: relative;
  font-size: inherit;
  text-align: center;
`;

export const StyledRangeContainer = styled.div`
  position: relative;
  background: #fefce8;
  width: 50%;
`;

export const StyledSliderContainer = styled.div`
  width: 100%;
  position: relative;
  background: #fefce8;
  height: fit-content;
`;

export const StyledSliderWrapper = styled.div`
  position: relative;
  margin-top: 0.7rem;
  width: 100%;
  height: auto;
  background: #fefce8;
  margin-bottom: 1.2rem;
  height: fit-content;
`;

export const StyledPriceText = styled.div`
  display: flex;
  justify-content: space-between;
  color: #2a5faf;
  font-size: 1rem;
  font-weight: 500;
`;

export const StyledRangeInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  width: 100%;
  pointer-events: auto;
  -webkit-appearance: none;
  background: #fefce8;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 1.3rem;
    background: #fefce8;
    border: 1px solid #2a5faf;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border: none;
    background: url("/assets/sliderThumb.svg") no-repeat center;
    background-size: contain;
    pointer-events: auto;
    position: relative;
    outline: none;
    box-shadow: none;
    z-index: 1;
  }

  &::-moz-range-track {
    width: 100%;
    height: 1.3rem;
    background: #fefce8;
    border: 1px solid #2a5faf;
  }

  &::-moz-range-thumb {
    width: 1.2rem;
    height: 1.2rem;
    background: url("/assets/sliderThumb.svg") no-repeat center;
    background-size: contain;
    pointer-events: auto;
    outline: none;
    box-shadow: none;
    z-index: 1;
  }
`;
