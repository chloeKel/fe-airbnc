import { useContext } from "react";
import { UserContext } from "../../Contexts/Contexts";
import useProperties from "../../CustomHooks/useProperties";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import PropertyCards from "./PropertyCards";

export default function ViewProperties() {
  const { userId } = useContext(UserContext);
  console.log("userId in viewProperties:", userId);
  const { properties } = useProperties(userId);

  return (
    <>
      <SortAndFilter />
      <PropertyCards properties={properties} />
    </>
  );
}
