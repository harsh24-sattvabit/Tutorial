import React, { useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

const TodoForm: React.FC = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
          autoFocus
        />
        <button type="submit" className="add-button" disabled={!text.trim()}>
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
