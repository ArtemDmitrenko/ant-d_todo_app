/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { Typography, message } from 'antd';

import './App.scss';
import 'antd/dist/antd.min.css';

const { Title, Text } = Typography;

const App: React.FC = () => {
  const MAX_TODOS = 10;
  const [todosList, setTodosList] = useState<string[]>([]);

  const handleAddTodoBtnClick = (newTodo: string): void => {
    if (todosList.length === MAX_TODOS) {
      message.error(`Maximum amount of todos is ${MAX_TODOS}`);
    } else {
      todosList.includes(newTodo)
        ? message.error("You've already have this todo in the list")
        : setTodosList((prevState) => [...prevState, newTodo]);
    }
  };

  const handleDeleteTodoBtnClick = (todo: string): void => {
    setTodosList((prevState) => prevState.filter((el) => el !== todo));
  };

  return (
    <div className="App">
      <div className="App__title">
        <Title>Todo App</Title>
      </div>
      <div className="App__input">
        <AddTodo onClick={handleAddTodoBtnClick} />
      </div>
      <div className="App__todoList">
        {todosList.length > 0 ? (
          <TodoList
            title="List of todos"
            list={todosList}
            onClick={handleDeleteTodoBtnClick}
          />
        ) : (
          <Text strong>Todo-list is empty...</Text>
        )}
      </div>
    </div>
  );
};

export default App;
