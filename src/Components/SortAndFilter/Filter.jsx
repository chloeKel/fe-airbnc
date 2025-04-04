import { useState } from "react";
import { StyledFilterContainer, StyledFilterButton, StyledArrowAsset, StyledDropdown, StyledOptions } from "../../Styling/FilterStyles";

export default function Filter() {
  const [selected, setSelected] = useState("Most popular");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Most popular", "Highest price first", "Lowest price first"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    console.log("Selected:", option);
    // GET request
  };

  return (
    <StyledFilterContainer>
      <StyledFilterButton width="100%" onClick={() => setIsOpen((prevState) => !prevState)}>
        <StyledArrowAsset src="/assets/blueArrow.svg" alt="down arrow" />
        {selected}
      </StyledFilterButton>
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
