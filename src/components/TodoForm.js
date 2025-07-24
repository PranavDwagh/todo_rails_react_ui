import React, { useState } from "react";
import { create_todos } from "../api/endpoints";

export default function TodoForm({ todos, setTodos }) {
  const [todoName, setTodoName] = useState("");
  const [completed, setCompleted] = useState(false);
  const [count, setCount] = useState(10);

  const handleSubmit = async(e) => {
    e.preventDefault();

    let newTodo = {
      // description: description,
      // completed: completed
      "todo_name": todoName,
      "completed": completed,
      key: count,
    };

    newTodo = await create_todos(newTodo)

    setTodos([...todos, newTodo]);

    setCompleted(false);
    setTodoName("");
    setCount((count) => count + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">What you want to do?</label>
        <input
          type="text"
          className="form-control"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label mx-3">Is this task Completed?</label>
        <input
          type="checkbox"
          onChange={(e) => setCompleted(e.target.checked)}
          checked={completed}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
