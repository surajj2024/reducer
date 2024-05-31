import {
    v4 as idGenerator
} from 'uuid';

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const EDIT_TODO = 'EDIT_TODO';

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: idGenerator(),
                    task: action.payload,
                    completed: false
                }]
            };

        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? {
                    ...todo,
                    completed: !todo.completed
                } : todo)
            };

        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? {
                    ...todo,
                    task: action.payload.task
                } : todo)
            }

            default:
                return state;
    }
}