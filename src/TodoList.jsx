import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggle }) => {
  const result = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        title={todo.title}
        delItem={deleteTodo}
        toggleItem={toggle}
      />
    );
  });
  return <div>{result}</div>;
};

export default TodoList;
