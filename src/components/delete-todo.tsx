"use client";
import { deleteTodoAction } from "@/server/actions/delete-todo.action";

export function DeleteTodo({ id }: Readonly<{ id: number }>) {
  const handleDelete = async () => {
    const result = await deleteTodoAction(id);
    console.log(result);
  };

  return (
    <button onClick={() => handleDelete()} type="button">
      <span>Delete</span>
    </button>
  );
}
