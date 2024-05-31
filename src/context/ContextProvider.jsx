import { createContext, useReducer, useEffect } from "react";
import PropTypes from 'prop-types';
import { todoReducer } from '../reducers/reducers';

// Export the context
export const TodoContext = createContext();


let initialState = {
    todos : [],
};

//Context Provider component
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer,JSON.parse(localStorage.getItem("reducerTodo")) || initialState);
    // console.log(state)

    useEffect(() => {
        localStorage.setItem("reducerTodo", JSON.stringify(state))
    }, [state])

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};


ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
