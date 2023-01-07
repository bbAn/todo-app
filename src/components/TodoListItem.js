import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
      {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      <div className="text">{text}</div>
    </div>
      <div className="remove" onClick={() => onRemove(id)} > {/* onRemove 함수에 현재 자신이 가진 id를 넣어서 삭제 함수를 호출 */}
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;