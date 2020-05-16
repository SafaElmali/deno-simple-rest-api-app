import TodoList from "../data/data.ts"
import Todo from "../model/todo.ts";

export const getTodos = (context: any) => {
    context.response.body = TodoList;
}

export const getTodoItem = (context: any) => {
    const selectedId = context.params.id;
    const selectedTodo = TodoList.find((item) => selectedId == item.id);

    if (selectedTodo) {
        context.response.body = selectedTodo;
    } else {
        context.response.status = 404;
        context.response.body = { message: `There is no such todo item.` }
    }
}

export const saveTodo = async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body();
    const todo: Todo = body.value;
    TodoList.push(todo);
    response.status = 200;
    response.body = { message: 'Todo item saved successfully!' }
}

export const updateTodoItem = async ({ request, response, params }: { request: any; response: any, params: any }) => {
    let todo = TodoList.find((item) => params.id == item.id);

    if (todo) {
        const body = await request.body();
        const updatedTodo: Todo = body.value;
        todo.detail = updatedTodo.detail;
        todo.doneStatus = updatedTodo.doneStatus;

        response.status = 200;
        response.body = { message: 'Todo Item updated successfully!' };
    } else {
        response.status = 404;
        response.body = { msg: `There is no such todo item!` }
    }
}

export const deleteTodoItem = ({ request, response, params }: { request: any; response: any, params: any }) => {
    const todoList = TodoList.filter((item) => item.id != params.id);
    
    console.log(todoList);
    response.status = 200;
    response.body = { message: 'Todo item removed successfully!' };
}

