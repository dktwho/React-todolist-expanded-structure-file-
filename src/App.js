import { useState } from 'react';
import './App.css';
import { dataTodo, generateId } from './data';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


function App() {
const [todos, setTodos] = useState(dataTodo)


function addTodoHandler(text) {
  const newTodo = {
    id: generateId(),
    title: text,
    isComplete: false,
  }
  setTodos([...todos, newTodo])
}

function deleteTodoHandler(id) {
  setTodos(todos.filter((todo) => todo.id !== id))
}

function toggleTodo(id) {
  setTodos(todos.map((todo) => {
    return todo.id === id
    ? {...todo, isComplete: !todo.isComplete}
    : {...todo}
  }))
}




  return (
    <div className="App">
      <br />
      <TodoInput  addTodo={addTodoHandler}/>
      <br />
      <hr />
      <br />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggle={toggleTodo} />

    </div>
  );
}

export default App;
