import { useState } from "react";
import SetPrice from "./SetPrice";
import SetSort from "./SetSort";
import SetOrder from "./SetOrder";
import { StyledButton } from "../../Styling/ButtonStyles";

export default function SortAndFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState("popularity");
  const [order, setOrder] = useState("descending");
  const [filtersClicked, setFiltersClicked] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setFiltersClicked((display) => !display)}>Filters</StyledButton>
      {filtersClicked ? (
        <div>
          <SetSort sort={sort} setSort={setSort} />
          <SetPrice minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
          <SetOrder order={order} setOrder={setOrder} />
          <StyledButton>Apply</StyledButton>
        </div>
      ) : null}
    </>
  );
}
