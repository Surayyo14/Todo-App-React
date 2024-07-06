
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todosSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="mr-2"
        />
        <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
      </div>
      <button onClick={() => dispatch(deleteTodo(todo.id))} className="text-red-500">Delete</button>
    </div>
  );
};

export default TodoItem;

