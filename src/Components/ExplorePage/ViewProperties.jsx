import { useUserContext } from "../../Contexts/Contexts";
import useRefinedProps from "../../CustomHooks/useRefinedProps";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import PropertyCards from "./PropertyCards";

export default function ViewProperties() {
  const { userId } = useUserContext();
  const { refinedProps } = useRefinedProps(userId);

  return (
    <>
      <SortAndFilter />
      <PropertyCards properties={refinedProps} />
    </>
  );
}
