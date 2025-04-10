import { StyledLoadingDiv, StyledLoader } from "../Styling/LoaderStyles";

export default function Loader() {
  const frames = ["/assets/loader/1.svg", "/assets/loader/2.svg", "/assets/loader/3.svg", "/assets/loader/4.svg", "/assets/loader/5.svg"];
  console.log("Loading....");

  return (
    <StyledLoadingDiv>
      {frames.map((frame, index) => (
        <StyledLoader key={index} src={frame} $delay={`${index * 0.3}s`} />
      ))}
    </StyledLoadingDiv>
  );
}
