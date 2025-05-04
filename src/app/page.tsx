import {getCollectionResourceTodoGet,  } from "@/client/sdk.gen";

export default async function Home() {
  const {data} = await getCollectionResourceTodoGet();
  
  return (
    <main>
      <h1>Todo App</h1>
      <ul>
        {
          data?._embedded?.todos ? data?._embedded?.todos.map(todo => {
            return <li key={todo.id}>
              <h3>Title: {todo.title}</h3>
            </li>
          }) : <p>There are not todos</p>
        }
      </ul>
    </main>
  );
}
