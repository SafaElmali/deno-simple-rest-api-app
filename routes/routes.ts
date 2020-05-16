import { Router } from "https://deno.land/x/oak/mod.ts";
import { getTodoItem, getTodos, saveTodo, updateTodoItem, deleteTodoItem } from "../controllers/todos.ts";

const router = new Router();

router
    .get("/todo", getTodos)
    .get("/todo/:id", getTodoItem)
    .post("/todo", saveTodo)
    .put("/todo/:id", updateTodoItem)
    .delete("/todo/:id", deleteTodoItem);

export default router;