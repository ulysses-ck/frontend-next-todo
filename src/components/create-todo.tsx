"use client";
import { createTodoAction } from "@/server/actions/create-todo.action";
import { useState } from "react";
import { PlusCircle, X } from "lucide-react";

export function CreateTodo() {
  const [isFormOpen, setIsFormOpen] = useState(false);
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
    await createTodoAction(data);
    setData({ title: "", description: "", completed: false });
    setIsFormOpen(false);
  };

  const resetForm = () => {
    setData({ title: "", description: "", completed: false });
    setIsFormOpen(false);
  };

  return (
    <div className="bg-white rounded-lg">
      {!isFormOpen ? (
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center justify-center w-full py-3 text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors font-medium"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          <span>Add New Task</span>
        </button>
      ) : (
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Create new task</h3>
            <button 
              onClick={resetForm}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Task title"
                value={data.title}
                onChange={(e) => setDataFn("title", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                id="description"
                type="text"
                placeholder="Task description"
                value={data.description}
                onChange={(e) => setDataFn("description", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="completed"
                type="checkbox"
                checked={data.completed}
                onChange={(e) => setDataFn("completed", e.currentTarget.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="completed" className="ml-2 block text-sm text-gray-700">
                Mark as completed
              </label>
            </div>
            
            <div className="flex justify-end space-x-3 pt-3">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveTodo}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}