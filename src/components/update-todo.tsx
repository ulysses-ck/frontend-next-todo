"use client";

import { updateTodoAction } from "@/server/actions/update-todo.action";
import { useState } from "react";
import { CheckCircle, Circle, ChevronDown, ChevronUp } from "lucide-react";

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
  const [isExpanded, setIsExpanded] = useState(false);
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
    if (key === "title" && dataInput === title) return;
    if (key === "description" && dataInput === description) return;
    if (key === "completed" && dataInput === completed) return;

    await updateTodoAction(
      id,
      data.title,
      data.description,
      data.completed
    );
  };

  const toggleCompleted = async () => {
    const newCompletedState = !data.completed;
    setDataFn("completed", newCompletedState);
    await updateTodoAction(
      id,
      data.title,
      data.description,
      newCompletedState
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center">
        <button 
          onClick={toggleCompleted}
          className="focus:outline-none mr-3"
          aria-label={data.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {data.completed ? (
            <CheckCircle className="h-6 w-6 text-green-500" />
          ) : (
            <Circle className="h-6 w-6 text-gray-400" />
          )}
        </button>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <input
              type="text"
              className={`text-lg font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded px-1 w-full ${
                data.completed ? "text-gray-500 line-through" : "text-gray-900"
              }`}
              value={data.title}
              onChange={(e) => setDataFn("title", e.target.value)}
              onBlur={(e) => updateTodo("title", e.target.value)}
            />
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-3 pl-9">
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Description
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-200 rounded-md text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            value={data.description}
            onChange={(e) => setDataFn("description", e.target.value)}
            onBlur={() => updateTodo("description", data.description)}
          />
        </div>
      )}
    </div>
  );
}