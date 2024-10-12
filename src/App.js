/*App 컴포넌트 정의*/
import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    setTodoList([...todoList, { text: inputValue, isCompleted: false }]);
    setInputValue("");
  };

  const deleteItem = (indexToDelete) => {
    setTodoList(todoList.filter((_, index) => index !== indexToDelete));
  };

  const toggleCompletion = (index) => {
    const updatedList = todoList.map((item, idx) => {
      if (idx === index) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodoList(updatedList);
  };

  return (
    <main>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>
      <TodoBoard
        todoList={todoList}
        deleteItem={deleteItem}
        toggleCompletion={toggleCompletion}
      />
    </main>
  );
}

export default App;
