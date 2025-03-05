import useProperties from "../../CustomHooks/useProperties";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import PropertyCards from "./PropertyCards";

export default function ViewProperties() {
  const { properties } = useProperties();

  return (
    <>
      <SortAndFilter />
      <PropertyCards properties={properties} />
    </>
  );
}
