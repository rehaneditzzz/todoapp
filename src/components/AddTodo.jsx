import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
function AddTodo({ onNewClick }) {
  const [todoName, setTodoName] = useState("");
  const [DueDate, setDueDate] = useState("");

  const handleTodoName = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddClicked = (event) => {
    event.preventDefault()
    onNewClick(todoName, DueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <form className="addtodo-container row"  onSubmit={handleAddClicked}>
        <div className="col-4  my-2">
          <input
            type="text"
            placeholder="Enter Item Here"
            value={todoName}
            onChange={handleTodoName}
          />
        </div>
        <div className="col-4 my-2">
          <input type="date" value={DueDate} onChange={handleDueDate} />
        </div>
        <div className="col-4 my-2 ">
          <button className="btn btn-success px-4" 
         
          >
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
