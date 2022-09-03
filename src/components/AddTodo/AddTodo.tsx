import React, { useState } from 'react';
import { Button, Input } from 'antd';

import './add-todo.scss';

interface IAddTodoProps {
  onSubmit: (todo: string) => void;
}

const AddTodo: React.FC<IAddTodoProps> = ({ onSubmit }) => {
  const [todoText, setTodoText] = useState<string>('');
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const {
      currentTarget: { value },
    } = e;
    setTodoText(value);
  };

  const handleSubmit = (): void => {
    setTodoText('');
    onSubmit(todoText);
  };

  return (
    <div className="add-todo">
      <div className="add-todo__input">
        <Input
          placeholder="Todo"
          onChange={handleInputChange}
          value={todoText}
        />
      </div>
      <div className="add-todo__button">
        <Button type="primary" onClick={handleSubmit}>
          Add todo
        </Button>
      </div>
    </div>
  );
};

export default AddTodo;
