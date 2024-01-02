import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItemss from "./components/todoItemss";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  // const initialtodoItems = [
  //   {
  //     name: "By Milk",
  //     DueDate: "4/12/2023",
  //   },
  //   {
  //     name: "Go To College",
  //     DueDate: "10/12/2023",
  //   },
  //   {
  //     name: "Go To Gym",
  //     DueDate: "1/1/2024",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newItems = [...todoItems, { name: itemName, DueDate: itemDueDate }];
    setTodoItems(newItems);
  };

  const handleDeleteTodo = (todoItemName) => {
    const newItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newItems);
  };

  return (
    <>
      <center className="todo-container row ">
        <AppName />
        <AddTodo onNewClick={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMsg />}
        <TodoItemss todoItems={todoItems} onDeleteClick={handleDeleteTodo} />
      </center>
    </>
  );
}
2;
export default App;
