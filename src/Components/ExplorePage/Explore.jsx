import { useUserContext } from "../../Contexts/Contexts";
import useFetchProps from "../../CustomHooks/useFetchProps";
import { StyledFiltersContainer } from "../../Styling/FilterStyles";
import Filter from "../SortAndFilter/Filter";
import PriceSlider from "../SortAndFilter/PriceSlider";
import PropertyCards from "./PropertyCards";
import Loader from "../Loader";

export default function Explore() {
  const { userId } = useUserContext();
  const { isLoading, properties } = useFetchProps(userId);

  return (
    <>
      <StyledFiltersContainer>
        <PriceSlider />
        <Filter />
      </StyledFiltersContainer>
      {isLoading ? <Loader /> : <PropertyCards properties={properties} />}
    </>
  );
}
