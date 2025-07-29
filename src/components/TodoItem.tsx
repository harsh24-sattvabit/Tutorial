import React, { useState, useRef, useEffect } from "react";
import type { Todo } from "../types/Todo";
import { useTodoContext } from "../hooks/useTodoContext";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const editInputRef = useRef<HTMLInputElement>(null);
  const { toggleTodo, deleteTodo, editTodo } = useTodoContext();

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      editTodo(todo.id, editText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleEdit();
    } else if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="todo-checkbox"
        />

        {isEditing ? (
          <input
            ref={editInputRef}
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyDown}
            className="todo-edit-input"
          />
        ) : (
          <span className="todo-text" onDoubleClick={handleDoubleClick}>
            {todo.text}
          </span>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="delete-button"
          aria-label="Delete todo"
        >
          ×
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
