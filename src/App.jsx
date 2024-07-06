
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todosSlice';
import TodoList from './components/TodoList';

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        text,
        completed: false,
      }));
      setText('');
    }
  };

  return (
    <div className="container w-[50%] m-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow p-2 border rounded mr-2"
        />
        <button onClick={handleAddTodo} className="bg-blue-500 text-white p-2 rounded">Add Todo</button>
      </div>
      <TodoList />
    </div>
  );
};

export default App;

