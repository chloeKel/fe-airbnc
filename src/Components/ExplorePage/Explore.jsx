import { useState } from "react";
import { useUserContext } from "../../Contexts/Contexts";
import useFetchProps from "../../CustomHooks/useFetchProps";
import { StyledFiltersContainer } from "../../Styling/FilterStyles";
import Filter from "../SortAndFilter/Filter";
import PriceSlider from "../SortAndFilter/PriceSlider";
import PropertyCards from "./PropertyCards";
import Loader from "../Loader";
import useMeasure from "../../CustomHooks/useMeasure";

export default function Explore() {
  const { userId } = useUserContext();
  const {
    measureRef,
    dimensions: { height },
  } = useMeasure();
  const [sort, setSort] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const { isLoading, properties, containerRef } = useFetchProps(userId, sort, minPrice, maxPrice);

  return (
    <>
      <StyledFiltersContainer ref={measureRef}>
        <PriceSlider setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
        <Filter setSort={setSort} />
      </StyledFiltersContainer>
      {isLoading ? <Loader /> : <PropertyCards properties={properties} containerRef={containerRef} height={height} />}
    </>
  );
}
