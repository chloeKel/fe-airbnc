import { useNavigate } from "react-router-dom";
import { StyledDefaultContent } from "../Styling/StyledDefaultContent";
import setDefaultContent from "../Utils/setDefaultContent";

export default function DefaultContent({ component }) {
  const navigate = useNavigate();

  return (
    <StyledDefaultContent>
      <p>{setDefaultContent(component)}</p>
      <button onClick={() => navigate("/")}>Explore</button>
    </StyledDefaultContent>
  );
}
