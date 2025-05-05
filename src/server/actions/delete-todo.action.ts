"use server";

import { deleteItemResourceTodoDelete } from "@/client";
import { revalidatePath } from "next/cache";

export async function deleteTodoAction(id: number) {
    const result = await deleteItemResourceTodoDelete({
        path: {
            id: id.toString()
        }
    })
    console.log(result);

    revalidatePath("/");

    return result.data;
}