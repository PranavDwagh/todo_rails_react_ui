import React, { useEffect, useState } from "react";
import ToDo from "./Todo";
import { delete_todo, get_todos } from "../api/endpoints";

export default function TodoList({ todos, setTodos }) {
  const getTimestamp = () => {
    return new Date().getTime();
  };

  const handleDelete = async (todo) => {
    await delete_todo(todo.id);
    const newTodoList = todos.filter((t) => t.id != todo.id);
    setTodos(newTodoList);
  };

  useEffect(() => {
    // Adding an offset to each timestamp to ensure uniqueness

    const getTodosFromApi = async () => {
      const todos = await get_todos();
      setTodos(todos);
      console.log("Todos fetched from API:", todos);
    };

    getTodosFromApi();
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <ToDo key={todo.id} todo={todo} completed={todo.completed} deleteTodo={handleDelete} />
      ))}
    </>
  );
}
