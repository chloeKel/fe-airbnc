import { useContext } from "react";
import { UserContext } from "../../Contexts/Contexts";
import useRefinedProps from "../../CustomHooks/useRefinedProps";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import PropertyCards from "./PropertyCards";

export default function ViewProperties() {
  const { userId } = useContext(UserContext);
  console.log("viewProperties userId:", userId);
  const { refinedProps } = useRefinedProps(userId);

  return (
    <>
      <SortAndFilter />
      <PropertyCards properties={refinedProps} />
    </>
  );
}
