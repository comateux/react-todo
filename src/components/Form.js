import React, { useState, useEffect, useRef } from "react";

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      complete: false,
    });

    setInput("");
  };

  return (
    <div>
      <form action="" className="todo-form" onSubmit={submitTodoHandler}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update Todo"
              value={input}
              onChange={inputChangeHandler}
              ref={inputFocus}
              name="text"
              className="todo-input edit"
            />
            <button className="todo-button edit" type="submit">
              <i className="fas fa-plus-square">+</i>
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add a Todo"
              value={input}
              onChange={inputChangeHandler}
              ref={inputFocus}
              name="text"
              className="todo-input"
            />
            <button className="todo-button" type="submit">
              <i className="fas fa-plus-square">+</i>
            </button>{" "}
          </>
        )}
      </form>
    </div>
  );
}

export default Form;
