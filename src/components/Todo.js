import React, { useState } from "react";
import { update_todo } from "../api/endpoints";

const ToDo = ({ todo, deleteTodo, completed }) => {

  const [isChecked, setChecked] = useState(completed)

  const handleUpdate = async (e) => {
    console.log("handleUpdate funciton");
    const payload = {
      completed: e.target.checked,
    };
    const updated_todo = await update_todo(todo.id, payload);
    setChecked(!isChecked)
  };

  return (
    <div className="border w-75 p-3">
      <div className="card" style={{ width: "300px" }}>
        <div className="card-body">
          <h5 className="card-title">{todo.todo_name}</h5>
          <input
            type="checkbox"
            className="form-check-input"
            checked={isChecked}
            onChange={handleUpdate}
          />
        </div>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDo;
