"use client";

import { updateTodoAction } from "@/server/actions/update-todo.action";
import { useState } from "react";

export function UpdateTodo({
  id,
  title,
  completed,
  description,
}: Readonly<{
  id: number;
  title: string;
  completed: boolean;
  description: string;
}>) {
  const [data, setData] = useState({
    title: title,
    description: description,
    completed: completed,
  });

  const setDataFn = (
    key: "title" | "description" | "completed",
    data: string | boolean
  ) => {
    setData((prev) => ({ ...prev, [key]: data }));
  };

  const updateTodo = async (
    key: "title" | "description" | "completed",
    dataInput: string | boolean
  ) => {
    if (key === "title" && dataInput === title) {
      return;
    }

    if (key === "description" && dataInput === description) {
      return;
    }

    if (key === "completed" && dataInput === completed) {
      return;
    }

    const result = await updateTodoAction(
      id,
      data.title,
      data.description,
      data.completed
    );

    console.log("Todo updated successfully:", result);
  };

  return (
    <div>
      <input
        type="text"
        onInput={(e) => setDataFn("title", e.currentTarget.value)}
        onBlur={(e) => updateTodo("title", e.currentTarget.value)}
        defaultValue={title}
      />
      <input
        type="text"
        onInput={(e) => setDataFn("description", e.currentTarget.value)}
        onBlur={() => updateTodo("description", data.description)}
        defaultValue={description}
      />
      <label htmlFor="completed">
        <span>Completed</span>
        <input
          type="checkbox"
          id="completed"
          defaultChecked={completed}
          onChange={(e) => setDataFn("completed", e.currentTarget.checked)}
          onBlur={() => updateTodo("completed", data.completed)}
        />
      </label>
    </div>
  );
}
