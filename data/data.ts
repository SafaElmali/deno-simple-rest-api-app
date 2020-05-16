import Todo from "../model/todo.ts";

const TodoList: Todo[] = [
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

export default TodoList;