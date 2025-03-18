import { useNavigate } from "react-router-dom";
import { StyledDefaultContent } from "../Styling/StyledDefaultContent";
import setDefaultContent from "../Utils/setDefaultContent";
import { StyledButton } from "../Styling/StyledButton";

export default function DefaultContent({ component }) {
  const navigate = useNavigate();

  return (
    <StyledDefaultContent>
      <p>{setDefaultContent(component)}</p>
      <StyledButton onClick={() => navigate("/")}>Explore</StyledButton>
    </StyledDefaultContent>
  );
}
