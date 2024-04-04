import { useState, useEffect } from 'react';
function AddTask() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <header className="App-header bg-white p-4 rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">TODO App</h1>
        <div className="todo-input flex items-center">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mr-2 flex-grow"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
        <ul className="todo-list mt-4">
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2">
              {todo}
              <button
                onClick={() => handleRemoveTodo(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default AddTask;