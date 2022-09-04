import React, { useState } from 'react';
import { Button, Input } from 'antd';

import './add-todo.scss';

const { TextArea } = Input;

interface IAddTodoProps {
  onClick: (todo: string) => any;
}

const AddTodo: React.FC<IAddTodoProps> = ({ onClick }) => {
  const [todoText, setTodoText] = useState<string>('');
  const handleInputChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const {
      currentTarget: { value },
    } = e;
    value.charAt(0) === ' ' ? setTodoText('') : setTodoText(value);
  };

  const handleBtnClick = (): void => {
    setTodoText('');
    onClick(todoText);
  };

  return (
    <div className="add-todo">
      <div className="add-todo__input">
        <TextArea
          rows={1}
          placeholder="Todo"
          onChange={handleInputChange}
          value={todoText}
        />
      </div>
      <div className="add-todo__button">
        <Button
          type="primary"
          disabled={todoText === ''}
          onClick={handleBtnClick}
        >
          Add todo
        </Button>
      </div>
    </div>
  );
};

export default AddTodo;
