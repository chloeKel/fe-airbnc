import { styled } from "styled-components";

export const StyledFiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  margin-top: 20.5vh;
`;

export const StyledFilterContainer = styled.div`
  position: relative;
  font-family: inherit;
  background: #fefce8;
  width: 50%;
`;

export const StyledFilterButton = styled.button`
  width: 100%;
  position: relative;
  width: ${(props) => props.width};
  height: auto;
  cursor: pointer;
  padding: 4px 0;
  text-align: center;
  background: transparent;
  border-right: 1px solid #2a5faf;
  border-bottom: 1px solid #2a5faf;
  outline: none;
  color: #2a5faf;
  font-size: 1rem;
  font-weight: 500;
`;

export const StyledArrowAsset = styled.img`
  width: 1rem;
  height: auto;
  background: transparent;
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
  font-size: 1rem;
  font-weight: 500;
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
