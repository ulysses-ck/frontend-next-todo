"use server";
import { putItemResourceTodoPut } from "@/client/sdk.gen";

import { revalidatePath } from "next/cache";

export async function updateTodoAction(
  id: number,
  title: string,
  description: string,
  completed: boolean
) {
  const result = await putItemResourceTodoPut({
    body: {
      id,
      title,
      description,
      completed,
    },
    path: {
      id: id.toString(),
    },
  });

  revalidatePath("/");

  return result.data;
}
