import { useState, useEffect } from "react";
import { CentralDiv } from "../Styling/CentralDiv";
import { setDefaultText } from "../Utils/setDefaultText";
import { useNavigate } from "react-router-dom";

export default function DefaultContent({ component }) {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  useEffect(() => {
    setText(setDefaultText(component));
  }, [component]);

  return (
    <CentralDiv>
      <p>{text}</p>
      <button onClick={() => navigate("/")}>Explore</button>
    </CentralDiv>
  );
}
