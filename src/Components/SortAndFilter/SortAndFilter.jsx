import { useState } from "react";
import SetPrice from "./SetPrice";
import SetSort from "./SetSort";
import SetOrder from "./SetOrder";

export default function SortAndFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState("popularity");
  const [order, setOrder] = useState("descending");
  const [filtersClicked, setFiltersClicked] = useState(false);

  return (
    <>
      <button onClick={() => setFiltersClicked((display) => !display)}>Filters</button>
      {filtersClicked ? (
        <div>
          <SetSort setSort={setSort} />
          <SetPrice minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
          <SetOrder setOrder={setOrder} />
          <button>Apply</button>
        </div>
      ) : null}
    </>
  );
}
