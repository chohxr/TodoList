import React, { useState } from "react"; 
import "./App.css";
import TodoBoard from "./components/TodoBoard";

function App() {
  // inputValue: 입력된 값을 저장
  // todoList: Todo 항목들을 저장하는 배열
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  // 아이템 추가 함수
  const addItem = () => {
    // 기존 todoList에 inputValue를 추가한 새로운 배열을 저장
    setTodoList([...todoList, inputValue]);
    // 아이템 추가 후 인풋을 비워줌
    setInputValue("");
  };

  // 아이템 삭제 함수
  const deleteItem = (indexToDelete) => {
    // 해당 인덱스를 제외한 아이템들로 새로운 배열을 만들어 todoList를 업데이트
    setTodoList(todoList.filter((_, index) => index !== indexToDelete));
  };

  return (
    <main>
      {/* 인풋 필드: 입력된 값이 inputValue에 저장됨 */}
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      {/* 버튼: 클릭 시 addItem 함수가 호출되어 아이템이 추가됨 */}
      <button onClick={addItem}>추가</button>

      {/* TodoBoard 컴포넌트로 todoList와 deleteItem 함수를 전달 */}
      <TodoBoard todoList={todoList} deleteItem={deleteItem} />
    </main>
  );
}

export default App;