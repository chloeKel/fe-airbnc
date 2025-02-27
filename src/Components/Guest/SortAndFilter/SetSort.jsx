export default function SetSort({ setSort }) {
  return (
    <div>
      <button value="popularity" onClick={(e) => setSort(e.target.value)}>
        Most popular
      </button>
      <button value="cost_per_night" onClick={(e) => setSort(e.target.value)}>
        Price per night
      </button>
    </div>
  );
}

// import Switch from "react-switch";

// export default function SetSort({ setSort }) {
//   const [checked, setChecked] = useState(false);

//   const handleChange = (checked) => {
//     setChecked(checked);
//     setSort(checked ? "Price per night" : "Most popular");
//   };

//   return (
//     <label>
//       <Switch onChange={handleChange} checked={checked} checkedIcon="Price per night" uncheckedIcon="Most popular" />
//     </label>
//   );
// }
