import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Divider, List, Typography } from 'antd';

import './todo-list.scss';

const { Text } = Typography;

interface ITodoListProps {
  list: string[];
}

const TodoList: React.FC<ITodoListProps> = ({ list }) => {
  const setTodoNumber = (item: string): number => {
    return list.findIndex((i) => i === item) + 1;
  };

  return (
    <div className="todo-list">
      <Divider className="todo-list__title" orientation="left">
        List of todos
      </Divider>
      <List
        // header={<div>Todos amount: {list.length}</div>}
        footer={<div>Total amount: {list.length}</div>}
        bordered
        dataSource={list}
        renderItem={(item) => (
          <List.Item className="todo-list__item">
            <Text className="todo-list__text">
              {`${setTodoNumber(item)} ${item}`}
            </Text>
            <Button
              className="todo-list__button"
              type="primary"
              icon={<CloseOutlined />}
              danger
            ></Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
