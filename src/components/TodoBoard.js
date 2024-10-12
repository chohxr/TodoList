/*todoList 받아서 각 항목을 화면에 렌더링 하는 컴포넌트 */
import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard({ todoList, deleteItem, toggleCompletion }) {
  {/*todoList: todoList 항목들이 포함된 배열
     deleteItem: 항목을 삭제하는 함수
     toggleCompletion: 완료상태를 표시 해주는 함수*/}
  return (
    <div>
      <h1>Todo List</h1>
      {/*map()함수와 item, index를 활용하여 새로운 컴포넌트 생성*/}
      {todoList.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          index={index}
          deleteItem={deleteItem}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  );
}

export default TodoBoard;
