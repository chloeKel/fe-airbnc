export default function SetOrder({ order, setOrder }) {
  return (
    <div>
      <button value="ascending" onClick={(e) => setOrder(e.target.value)}>
        {order}, Lowest price first
      </button>
      <button value="descending" onClick={(e) => setOrder(e.target.value)}>
        Highest price first
      </button>
    </div>
  );
}
