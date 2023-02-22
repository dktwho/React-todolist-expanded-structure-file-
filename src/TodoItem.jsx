import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, title, delItem, toggleItem }) => {
  return (
    <p>
      <span>
        {title} <button onClick={() => delItem(todo.id)}>remove</button>
        <button
          className={`${
            todo.isComplete ? styles.btnComplete : styles.btnIncomplete
          }`}
          onClick={() => toggleItem(todo.id)}
        >
          {todo.isComplete ? "complete" : "incomplete"}
        </button>
      </span>
    </p>
  );
};

export default TodoItem;
