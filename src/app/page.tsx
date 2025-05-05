import { getCollectionResourceTodoGet } from "@/client/sdk.gen";
import { CreateTodo } from "@/components/create-todo";
import { DeleteTodo } from "@/components/delete-todo";
import { UpdateTodo } from "@/components/update-todo";
import { CheckSquare } from "lucide-react";

export default async function Home() {
  const { data } = await getCollectionResourceTodoGet();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="max-w-3xl w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-center mb-8">
            <CheckSquare className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Todo App</h1>
          </div>

          <div className="mb-8">
            <CreateTodo />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">My Tasks</h2>
            {data?._embedded?.todos && data._embedded.todos.length > 0 ? (
              <ul className="space-y-3">
                {data._embedded.todos.map(({ id, title, description, completed }) => (
                  <li 
                    key={id} 
                    className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors"
                  >
                    <UpdateTodo
                      id={id!}
                      title={title!}
                      description={description!}
                      completed={completed!}
                    />
                    <div className="mt-3 border-t pt-3">
                      <DeleteTodo id={id as number} />
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-10 text-gray-500">
                <p>There are no todos yet. Create one above!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}