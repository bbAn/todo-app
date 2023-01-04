import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
 
const App = () => {
  const [todos, setTodos] = useState([ 
    // todos 객체 정의: 각 항목의 고유 id, 내용, 완료 여부
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} /> {/* todos를 TodoList의 props로 전달 */}
    </TodoTemplate>
  );
};
 
export default App;