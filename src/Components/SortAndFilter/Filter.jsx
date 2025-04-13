import { useState } from "react";
import { StyledFilterContainer, StyledArrowAsset, StyledDropdown, StyledOptions } from "../../Styling/FilterStyles";
import { StyledButton } from "../../Styling/ButtonStyles";

export default function Filter({ setSort }) {
  const [selected, setSelected] = useState("Most popular");
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Most popular", "Highest price first", "Lowest price first"];

  const handleSelect = (option) => {
    setSelected(option);
    setSort(option);
    setIsOpen(false);
  };

  return (
    <StyledFilterContainer>
      <StyledButton onClick={() => setIsOpen((prevState) => !prevState)} $width="100%">
        <StyledArrowAsset src="/assets/blueDownArrow.svg" alt="down arrow" />
        {selected}
      </StyledButton>
      {isOpen && (
        <StyledDropdown>
          {options
            .filter((option) => option !== selected)
            .map((option) => (
              <StyledOptions key={option} onClick={() => handleSelect(option)}>
                {option}
              </StyledOptions>
            ))}
        </StyledDropdown>
      )}
    </StyledFilterContainer>
  );
}
