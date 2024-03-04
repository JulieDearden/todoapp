import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <div>
        <input className="border border-gray-300 rounded p-2 flex-grow" type="text" value={inputValue}
        onChange={handleInputChange} placeholder="Add new todo" />
         <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded" onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map(todo => (      
          <li key={todo.id}>
            {todo.text}
            <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded ml-4" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default TodoList;