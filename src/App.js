import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App container">
      <h2>My Todos</h2>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
