import React from "react";

function TodoItem({ item, index, deleteItem, toggleCompletion }) {
  return (
    <div className="todo-item">
      {/*체크박스 넣어주는 input 태그 */}
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => toggleCompletion(index)}
      />
      {/*span태그: text.isCompleted 값이 true이면 텍스트에 밑줄(line-through)을 그어 완료 했다는
                  내용을 알려주는 태그  */}
      <span style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}>
        {item.text}
      </span>
      {/*삭제 버튼: 클릭시 deleteItem 함수가 호출되어 항목이 삭제되는 기능 */}
      <button onClick={() => deleteItem(index)}>삭제</button>
    </div>
  );
}

export default TodoItem;