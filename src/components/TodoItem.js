import React from "react";

function TodoItem({ item, index, deleteItem }) {
  return (
    <div className="todo-item">
      {/* 각 Todo 아이템의 텍스트 표시 */}
      {item}
      {/* 삭제 버튼: 클릭 시 deleteItem 함수가 호출되어 해당 인덱스의 아이템을 삭제 */}
      <button onClick={() => deleteItem(index)}>삭제</button>
    </div>
  );
}

export default TodoItem; 