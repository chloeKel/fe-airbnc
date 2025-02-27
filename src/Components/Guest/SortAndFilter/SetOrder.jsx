export default function SetOrder() {
  return (
    <div>
      <button value="ascending" onClick={(e) => setSort(e.target.value)}>
        Lowest price first
      </button>
      <button value="descending" onClick={(e) => setSort(e.target.value)}>
        Highest price first
      </button>
    </div>
  );
}
