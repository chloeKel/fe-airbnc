import { StyledButton } from "../../Styling/ButtonStyles";

export default function SetSort({ sort, setSort }) {
  return (
    <div>
      <StyledButton value="popularity" onClick={(e) => setSort(e.target.value)}>
        {sort}, Most popular
      </StyledButton>
      <StyledButton value="cost_per_night" onClick={(e) => setSort(e.target.value)}>
        Price per night
      </StyledButton>
    </div>
  );
}
