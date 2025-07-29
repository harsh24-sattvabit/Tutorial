import React, { useState, useMemo } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import TodoItem from "./TodoItem";

type FilterType = "all" | "active" | "completed";

const TodoList: React.FC = () => {
  const { todos, clearCompleted } = useTodoContext();
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No todos yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      {todos.length > 0 && (
        <div className="todo-footer">
          <div className="todo-count">
            {activeCount} item{activeCount !== 1 ? "s" : ""} left
          </div>

          <div className="todo-filters">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === "active" ? "active" : ""}`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={`filter-btn ${filter === "completed" ? "active" : ""}`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>

          {completedCount > 0 && (
            <button onClick={clearCompleted} className="clear-completed-btn">
              Clear completed
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
