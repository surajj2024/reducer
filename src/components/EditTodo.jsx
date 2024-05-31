import propTypes from "prop-types";
import { useState } from "react";

const EditTodo = ({ ele, deleteTodo, editTodoTask, handleCheckbox }) => {
  const { task, id, completed } = ele;
  const [check, setCheck] = useState(true);
  const [input, setInput] = useState(task);

  return (
    <div
      className="todos"
      style={{
        display: "flex",
        gap: "10px",
        width: "60%",
        margin: "auto",
        padding: "10px",
        marginTop: "15px",
      }}
    >
      <span>
        <input
          style={{ height: "20px", width: "20px", borderRadius: "50%" }}
          type="checkbox"
          checked={completed}
          onChange={() => handleCheckbox(id)}
        />
      </span>
      <span style={{ width: "80%" }}>
        {check ? (
          completed ? (
            <del>{task}</del>
          ) : (
            task
          )
        ) : (
          <input
          className="border border-slate-400"
            style={{ width: "80%" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        )}
      </span>
      <span
        onClick={() => {
          setCheck(!check);
          if (task !== input && input && !check) {
            editTodoTask(id, input);
          }
        }}
      >
        {check ? "🔄️" : "✅"}
      </span>

      <span onClick={() => deleteTodo(id)}>🗑️</span>
    </div>
  );
};

EditTodo.propTypes = {
  ele: propTypes.object.isRequired,
  deleteTodo: propTypes.func.isRequired,
  editTodoTask: propTypes.func.isRequired,
  handleCheckbox: propTypes.func.isRequired,
};

export default EditTodo;
