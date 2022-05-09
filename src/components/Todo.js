import React, { useState } from "react";
import Form from "./Form";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiCheckFill } from "react-icons/ri";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className="todo">
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <RiCheckFill className="complete-icon" onClick={() => completeTodo(todo.id)}/>
          <RiCloseLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <MdOutlineModeEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    </div>
  ));
}

export default Todo;
