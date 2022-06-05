import React, { useState } from "react";

import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

const Todo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdateTodo = (e) => {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    };

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          className="todoInput"
          onChange={handleChange}
          type="text"
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>
          <AiOutlineEdit />
        </button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>
        <button className="button" onClick={() => setIsEdit(true)}>
          <AiOutlineEdit />
        </button>
        <button className="buttonDelete" onClick={() => onDelete(item.id)}>
          <MdDeleteOutline />
        </button>
      </div>
    );
  };

  return (
    <div className="todo animate__animated animate__backInLeft">
      {isEdit ? <FormEdit /> : <TodoElement />}
    </div>
  );
};

export default Todo;
