import React, { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { Typography } from 'antd';

import './App.scss';
import 'antd/dist/antd.min.css';

const { Title } = Typography;

const App: React.FC = () => {
  const [todosList, setTodosList] = useState<string[]>([]);

  const handleAddTodo = (todo: string): void => {
    setTodosList((prevState) => [...prevState, todo]);
  };

  return (
    <div className="App">
      <div className="App__title">
        <Title>Todo App</Title>
      </div>
      <div className="App__input">
        <AddTodo onSubmit={handleAddTodo} />
      </div>
      <div className="App__todoList">
        <TodoList list={todosList} />
      </div>
    </div>
  );
};

export default App;
