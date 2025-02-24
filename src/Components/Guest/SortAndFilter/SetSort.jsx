import { useState } from "react";
import Switch from "react-switch";

export default function SetSort({ setSort }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
    setSort(checked ? "Price per night" : "Most popular");
  };

  return (
    <label>
      <Switch onChange={handleChange} checked={checked} checkedIcon="Price per night" uncheckedIcon="Most popular" />
    </label>
  );
}
