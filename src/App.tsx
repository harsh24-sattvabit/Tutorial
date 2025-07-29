import "./App.css";
import { TodoProvider } from "./context";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <TodoApp />
      </div>
    </TodoProvider>
  );
}

export default App;
