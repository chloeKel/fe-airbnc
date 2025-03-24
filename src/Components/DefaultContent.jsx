import { useNavigate } from "react-router-dom";
import { StyledDefaultContent } from "../Styling/DefaultContentStyle";
import setDefaultContent from "../Utils/setDefaultContent";
import { StyledButton } from "../Styling/ButtonStyles";

export default function DefaultContent({ component }) {
  const navigate = useNavigate();

  return (
    <StyledDefaultContent>
      <p>{setDefaultContent(component)}</p>
      <StyledButton onClick={() => navigate("/")}>Explore</StyledButton>
    </StyledDefaultContent>
  );
}
