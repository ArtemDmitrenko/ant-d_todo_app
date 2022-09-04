import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Divider, List, Typography } from 'antd';

import './todo-list.scss';

const { Text } = Typography;

interface ITodoListProps {
  title: string;
  list: string[];
  onClick: (todo: string) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ title, list, onClick }) => {
  const getTodoNumber = (item: string): number => {
    return list.findIndex((i) => i === item) + 1;
  };

  const handleBtnClick = (todo: string): void => {
    onClick(todo);
  };

  return (
    <div className="todo-list">
      <Divider className="todo-list__title" orientation="left">
        {title}
      </Divider>
      <List
        footer={<div>Total amount: {list.length}</div>}
        bordered
        dataSource={list}
        renderItem={(item) => (
          <List.Item className="todo-list__item">
            <Text className="todo-list__text">
              {`${getTodoNumber(item)} ${item}`}
            </Text>
            <Button
              htmlType="button"
              type="default"
              className="todo-list__button"
              onClick={handleBtnClick.bind(this, item)}
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
