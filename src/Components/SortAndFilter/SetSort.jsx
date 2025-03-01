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
