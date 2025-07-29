import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp: React.FC = () => {
  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Todo List</h1>
        <p>Organize your tasks efficiently</p>
      </header>

      <main className="todo-main">
        <TodoForm />
        <TodoList />
      </main>
    </div>
  );
};

export default TodoApp;
