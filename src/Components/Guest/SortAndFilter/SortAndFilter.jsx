import { useState } from "react";
import SetPrice from "./SetPrice";
import SetSort from "./SetSort";

export default function SortAndFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  // const [priceRange, setPriceRange] = useState([0, 50]);
  const [sort, setSort] = useState("Most popular");
  const [order, setOrder] = useState("");

  console.log(sort);
  return (
    <div>
      <h3>Filters</h3>
      <SetSort setSort={setSort} />
      <SetPrice minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
      <button>Apply</button>
    </div>
  );
}
