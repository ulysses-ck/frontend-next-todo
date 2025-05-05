"use client";
import { deleteTodoAction } from "@/server/actions/delete-todo.action";
import { Trash2 } from "lucide-react";

export function DeleteTodo({ id }: Readonly<{ id: number }>) {
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this task?")) {
      await deleteTodoAction(id);
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      type="button"
      className="text-red-500 hover:text-red-700 font-medium flex items-center text-sm focus:outline-none"
      aria-label="Delete task"
    >
      <Trash2 className="h-4 w-4 mr-1" />
      <span>Delete</span>
    </button>
  );
}