import { StyledButton } from "../../Styling/StyledButton";

export default function SetOrder({ order, setOrder }) {
  return (
    <div>
      <StyledButton value="ascending" onClick={(e) => setOrder(e.target.value)}>
        {order}, Lowest price first
      </StyledButton>
      <StyledButton value="descending" onClick={(e) => setOrder(e.target.value)}>
        Highest price first
      </StyledButton>
    </div>
  );
}
