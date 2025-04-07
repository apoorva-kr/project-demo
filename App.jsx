
import { useState } from 'react'
import TodoList from './components/TodoList'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[todos, setTodos] = useState([]);
const addTodo =(text)=>{
  const newTodo =
  {
    id:Date.now(),
    text,
  };
  setTodos([newTodo,...todos]);

};
const deleteTodo=(id)=>{
 setTodos(todos.filter(todo=>todo.id!==id));



};


  return (
 <div style ={{padding :'20px'}}>
  <h1>Todo List</h1>
  <TodoList todos={todos} onAdd ={addTodo}
  onDelete={deleteTodo}/>
 </div>
  );
}


export default App;
