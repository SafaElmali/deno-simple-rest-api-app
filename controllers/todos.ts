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
    todo.id = Math.floor(Math.random() * 100);
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

export const deleteTodoItem = ({ response, params }: { request: any; response: any, params: any }) => {
    TodoList = TodoList.filter((item) => item.id != params.id);
    
    response.status = 200;
    response.body = { message: 'Todo item removed successfully!' };
}

let TodoList: Todo[] = [
    {
        id: 1,
        detail: 'Write a post about Deno with REST API',
        doneStatus: false
    },
    {
        id: 2,
        detail: 'Write a post about React connection With Deno REST API',
        doneStatus: false
    },
    {
        id: 3,
        detail: 'Love Deno',
        doneStatus: true
    },
    {
        id: 4,
        detail: 'Learn Preprocessers',
        doneStatus: false
    }
];

