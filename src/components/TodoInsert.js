import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
 
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e=> { 
    // 컴포넌트가 리렌더링될 때마다 함수를 새로 만드는 것이 아니라 한번 함수를 만들고 재사용할 수 있도록 useCallback Hook 사용
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e=> {
      onInsert(value); // props로 받아 온 onInsert 함수에 현재 value 값을 파라미터로 넣어서 호출
      setValue(""); // value 값 초기화
      
      // submit 이벤트는 브라우저에서 새로고침을 발생 시킴
      // 이를 방지하기 위해 사용하는 함수
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      {/* onSubmit 대신에 버튼의 onClick 이벤트로도 처리할 수 있음 */}
      <input 
        placeholder="할 일을 입력하세요" 
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
 
export default TodoInsert;