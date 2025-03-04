import { useState, useEffect } from "react";
import { setDefaultText } from "../Utils/setDefaultText";
import { useNavigate } from "react-router-dom";
import { StyledDefaultContent } from "../Styling/StyledDefaultContent";

export default function DefaultContent({ component }) {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  useEffect(() => {
    setText(setDefaultText(component));
  }, [component]);

  return (
    <StyledDefaultContent>
      <p>{text}</p>
      <button onClick={() => navigate("/")}>Explore</button>
    </StyledDefaultContent>
  );
}
