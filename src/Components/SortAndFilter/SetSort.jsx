export default function SetSort({ sort, setSort }) {
  return (
    <div>
      <button value="popularity" onClick={(e) => setSort(e.target.value)}>
        {sort}, Most popular
      </button>
      <button value="cost_per_night" onClick={(e) => setSort(e.target.value)}>
        Price per night
      </button>
    </div>
  );
}
