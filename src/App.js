import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// 데이터 2,500개를 자동 생성
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
 const [todos, setTodos] = useState(createBulkTodos); 
 // useState(createBulkTodos)처럼 파라미터를 함수 형태로 넣어 주면 컴포넌트가 처음 렌더링될 때만 createBulkTodos 함수가 실행

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);
 
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo)); // 어떻게 업데이트할지 정의해 주는 업데이트 함수를 넣어 줌. setTodos를 사용할 때 그 안에 todos =>만 앞에 넣어줌
      nextId.current += 1; // nextId 1씩 더하기
    },
    [],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [],
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo =>  // 불변성을 유지하면서 특정 배열 원소를 업데이트해야 할 때 map을 사용하면 짧은 코드로 쉽게 작성 
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} /> {/* TodoList의 props로 전달 */}
    </TodoTemplate>
  );
};
 
export default App;