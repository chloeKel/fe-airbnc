export default function SetPrice({ minPrice, maxPrice, setMinPrice, setMaxPrice }) {
  return (
    <>
      <label>
        Show properties priced from <input value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </label>
      <label>
        to <input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </label>
    </>
  );
}
