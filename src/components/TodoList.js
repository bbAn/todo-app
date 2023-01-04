import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  // todos 배열은 TodoList에 props로 전달되고 TodoList에서 이 값을 받아 TodoItem으로 변환하여 렌더링하도록 설정
  // todos 배열 안에 들어 있는 객체에는 각 항목의 고유 id, 내용, 완료 여부를 알려 주는 값이 포함

  return (
    <div className="TodoList">
      {todos.map(todo => ( // props로 받아 온 todos 배열을 배열 내장 함수 map을 통해 TodoListItem으로 이루어진 배열로 변환하여 렌더링
        <TodoListItem todo={todo} key={todo.id} />
        // todo 데이터는 통째로 props로 전달함
        // 여러 종류의 값을 전달해야 하는 경우는 객체로 통째로 전달하는 편이 나중에 성능 최적화를 할 때 편리
      ))}
    </div>
  );
};

export default TodoList;