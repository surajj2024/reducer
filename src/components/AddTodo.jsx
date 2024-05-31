import { useContext, useState } from "react";
import propType from "prop-types";
import { TodoContext } from "../context/ContextProvider";

const AddTodo = ({toast}) => {
    const { todos, dispatch } = useContext(TodoContext);
    const [input, setInput] = useState("");

    const createTodo = () => {
        if(!input || input.trim() === ""){
            toast.error("Enter a valid Todo")
            return
        }

        dispatch({type: "ADD_TODO", payload: input})
        toast.success("Todo Created");
        setInput("")

    }
    return (
        <div className="addTodo">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="border border-black"/>
        <button className="button-59 addBtn" onClick={() => {
            setInput("")
            createTodo()
        }}>ADD TODO</button>
        <button className="button-59 plusBtn" onClick={() => {
            setInput("")
            createTodo()
        }}>+</button>
        </div>
    )
}

AddTodo.propTypes = {
    toast: propType.func,
}



export default AddTodo;