import React, { useState } from "react";
import Todo from "./Todo";

import { MdAdd } from "react-icons/md";

const TodoApp = () => {
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      complete: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);
    setTitle('');
  };

  const handleUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  };


  const handleDelete = (id) => {
      const temp = todos.filter(item => item.id !== id)
      setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="todoInput"
          type="text"
          value={title}
        />

        <button onClick={handleSubmit} className="buttonCreate" type="submit">
          <MdAdd />
        </button>
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
      
    </div>
  );
};

export default TodoApp;
