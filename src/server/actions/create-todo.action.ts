"use server";

import { postCollectionResourceTodoPost, TodoRequestBody } from "@/client";
import { revalidatePath } from "next/cache";

export async function createTodoAction(data: TodoRequestBody) {
    const result = await postCollectionResourceTodoPost({
        body: {
            ...data
        }
    });

    if (result.error) {
        console.error("Error creating todo:", result.error);
        throw new Error("Failed to create todo");
    }

    revalidatePath("/");

    return result.data;
}