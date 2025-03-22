import { useUserContext } from "../../Contexts/Contexts";
import useFetchProps from "../../CustomHooks/useFetchProps";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import PropertyCards from "./PropertyCards";

export default function Explore() {
  const { userId } = useUserContext();
  const properties = useFetchProps(userId);

  return (
    <>
      <SortAndFilter />
      <PropertyCards properties={properties} />
    </>
  );
}
