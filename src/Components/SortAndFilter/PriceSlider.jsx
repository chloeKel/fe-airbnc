import { useState } from "react";
import { StyledRangeContainer, StyledFilterButton, StyledArrowAsset, StyledSliderContainer, StyledSliderWrapper, StyledRangeInput, StyledPriceText } from "../../Styling/FilterStyles";

export default function PriceSlider() {
  const step = 10;
  const minRange = 50;
  const maxRange = 1000;
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [isOpen, setIsOpen] = useState(false);

  const handleMin = (e) => {
    e.preventDefault();
    const value = parseFloat(e.target.value);
    const newMin = Math.min(value, max - step);
    setMin(newMin);
  };

  const handleMax = (e) => {
    e.preventDefault();
    const value = parseFloat(e.target.value);
    const newMax = Math.max(value, min - step);
    setMax(newMax);
  };

  const handleDropDown = () => {
    setIsOpen((display) => !display);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <StyledRangeContainer>
      <>
        {isOpen ? (
          <>
            <StyledFilterButton width="50%" onClick={handleClose}>
              X
            </StyledFilterButton>
            <StyledFilterButton width="50%" onClick={handleClose}>
              Confirm
            </StyledFilterButton>
          </>
        ) : (
          <StyledFilterButton width="100%" onClick={handleDropDown}>
            Custom Price
            <StyledArrowAsset src="/assets/blueArrow.svg" alt="down arrow" />
          </StyledFilterButton>
        )}
      </>
      {isOpen && (
        <StyledSliderContainer>
          <StyledPriceText>
            <p>£{min}</p>
            <p>£{max}</p>
          </StyledPriceText>
          <StyledSliderWrapper>
            <StyledRangeInput type="range" value={min} min={minRange} max={maxRange} step={step} onChange={handleMin} />
            <StyledRangeInput type="range" value={max} min={minRange} max={maxRange} step={step} onChange={handleMax} />
          </StyledSliderWrapper>
        </StyledSliderContainer>
      )}
    </StyledRangeContainer>
  );
}
