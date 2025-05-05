"use client";
import { createTodoAction } from "@/server/actions/create-todo.action";
import { useState } from "react";

export function CreateTodo() {
  const [data, setData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const setDataFn = (
    key: "title" | "description" | "completed",
    data: string | boolean
  ) => {
    setData((prev) => ({ ...prev, [key]: data }));
  };

  const saveTodo = async () => {
    const result = await createTodoAction(data);

    console.log("Todo created successfully:", result);
  };

  return (
    <div>
      <h3>Create new todo</h3>
      <input
        type="text"
        placeholder="Title"
        onInput={(e) => {
          setDataFn("title", e.currentTarget.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        onInput={(e) => {
          setDataFn("description", e.currentTarget.value);
        }}
      />
      <label htmlFor="completed">
        <span>Completed</span>
        <input
          type="checkbox"
          id="completed"
          onChange={(e) => {
            setDataFn("completed", e.currentTarget.checked);
          }}
        />
      </label>

      <button type="button" onClick={() => saveTodo()}>
        Save todo
      </button>
    </div>
  );
}
