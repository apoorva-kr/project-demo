// src/components/TodoItem.jsx
function TodoItem({ todo, onDelete }) {
    return (
      <li>
        {todo.text}
        <button onClick={() => onDelete(todo.id)} style={{ marginLeft: '10px' }}>
          Delete
        </button>
      </li>
    );
  }
  
  export default TodoItem;
  