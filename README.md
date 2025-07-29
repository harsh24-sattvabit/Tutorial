# Todo List App

A modern, responsive Todo list application built with React and TypeScript. Features a beautiful UI with smooth animations and comprehensive functionality.

## Features

- ✅ **Add new todos** - Simple form to add new tasks
- ✅ **Mark todos as complete** - Click checkbox to toggle completion status
- ✅ **Edit todos** - Double-click on any todo to edit it inline
- ✅ **Delete todos** - Hover over a todo to reveal the delete button
- ✅ **Filter todos** - View All, Active, or Completed todos
- ✅ **Clear completed** - Remove all completed todos at once
- ✅ **Responsive design** - Works perfectly on desktop and mobile
- ✅ **Beautiful UI** - Modern gradient design with smooth animations
- ✅ **TypeScript** - Fully typed for better development experience

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Adding Todos
- Type your task in the input field at the top
- Press Enter or click the "Add" button to add the todo

### Managing Todos
- **Complete a todo**: Click the checkbox next to any todo
- **Edit a todo**: Double-click on the todo text to edit it inline
- **Delete a todo**: Hover over a todo and click the "×" button that appears
- **Filter todos**: Use the filter buttons (All, Active, Completed) to view different sets of todos
- **Clear completed**: Click "Clear completed" to remove all completed todos

### Keyboard Shortcuts
- **Enter**: Add a new todo (when typing in the input field)
- **Enter**: Save changes when editing a todo
- **Escape**: Cancel editing a todo

## Project Structure

```
src/
├── components/
│   ├── TodoApp.tsx      # Main app component
│   ├── TodoForm.tsx     # Form for adding new todos
│   ├── TodoItem.tsx     # Individual todo item component
│   └── TodoList.tsx     # List of todos with filtering
├── context/
│   └── TodoContext.tsx  # React context for state management
├── types/
│   └── Todo.ts          # TypeScript interfaces
├── App.tsx              # Root component
└── App.css              # Styles
```

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with gradients and animations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### State Management
The app uses React Context API with useReducer for efficient state management. All todo operations (add, edit, delete, toggle, clear) are handled through a centralized context.

### Responsive Design
The app is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones

### Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- High contrast design

### Performance
- Optimized re-renders with React.memo
- Efficient filtering with useMemo
- Smooth animations with CSS transitions

## Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## License

This project is open source and available under the MIT License.
