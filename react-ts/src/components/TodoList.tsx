import React from 'react';
import { ITodo } from '../models/Todo';

import './TodoList.css';

interface TodoListProps {
  items: ITodo[];
  onRemoveTodo: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onRemoveTodo.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
