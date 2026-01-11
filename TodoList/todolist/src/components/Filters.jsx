export default function Filters({ setFilter, clearCompleted }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}
