import { useContext, useState } from "react";
import { TodoContext } from "../context/ContextProvider";
import EditTodo from "./EditTodo";
import propType from "prop-types";

const ShowTodo = ({toast}) => {
  const [search, setSearch] = useState("")
  const { state, dispatch } = useContext(TodoContext);
  const {todos} = state;
  // console.log(todos)

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(search.toLowerCase())
  );

  const handleCheckbox = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const editTodoTask = (id, input) => {
    dispatch({ type: "EDIT_TODO", payload: { id, task: input } });

    toast('Edited Successfully', {
      icon: '👏',
    });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
    toast.error("Deleted Successfully")
  };
  
  return (
    <div>
    <div className="addTodo">
    <input type="text" className="border border-black p-1" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search TODO"/>
    </div>
    <div>
      {filteredTodos.map((ele) => (
        <EditTodo
          ele={ele}
          deleteTodo={deleteTodo}
          editTodoTask={editTodoTask}
          handleCheckbox={handleCheckbox}
          key={ele.id}
        />
      ))}
    </div>
    </div>
  );
};

ShowTodo.propTypes = {
  toast: propType.func,
}

export default ShowTodo;
