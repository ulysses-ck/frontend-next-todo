import { getCollectionResourceTodoGet } from "@/client/sdk.gen";
import { CreateTodo } from "@/components/create-todo";
import { DeleteTodo } from "@/components/delete-todo";
import { UpdateTodo } from "@/components/update-todo";

export default async function Home() {
  const { data } = await getCollectionResourceTodoGet();

  return (
    <main>
      <h1>Todo App</h1>

      <CreateTodo />

      <ul>
        {data?._embedded?.todos ? (
          data?._embedded?.todos.map(
            ({ id, title, description, completed }) => {
              return (
                <li key={id}>
                  <UpdateTodo
                    id={id!}
                    title={title!}
                    description={description!}
                    completed={completed!}
                  />
                  <DeleteTodo id={id as number} />
                </li>
              );
            }
          )
        ) : (
          <p>There are not todos</p>
        )}
      </ul>
    </main>
  );
}
