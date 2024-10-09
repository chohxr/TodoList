import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard({ todoList, deleteItem }) {
  return (
    <div>
      <h1>Todo List</h1>
      {/* todoList의 각 항목(item)을 TodoItem 컴포넌트로 전달 */}
      {todoList.map((item, index) => (
        // key는 React에서 리스트를 렌더링할 때 필요한 고유 값
        // 각 아이템에 index와 deleteItem 함수를 전달
        <TodoItem
          key={index}
          item={item}
          index={index}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default TodoBoard;
