import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  function changeHandler(e) {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }

  return (
    <div>
      <form onSubmit={changeHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">click</button>
      </form>
    </div>
  );
};

export default TodoInput;
