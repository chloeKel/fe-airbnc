export default function SetOrder({ setOrder }) {
  return (
    <div>
      <button value="ascending" onClick={(e) => setOrder(e.target.value)}>
        Lowest price first
      </button>
      <button value="descending" onClick={(e) => setOrder(e.target.value)}>
        Highest price first
      </button>
    </div>
  );
}
