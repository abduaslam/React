export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>✕</button>
    </li>
  );
}
