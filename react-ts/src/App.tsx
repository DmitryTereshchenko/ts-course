import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { ITodo } from './models/Todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onAddTodo = (newTodo: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: newTodo },
    ]);
  };

  const onRemoveTodo = (todoId: string) => {
    setTodos(prevState => {
      return prevState.filter(todo => todo.id !== todoId);
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={onAddTodo} />
      <TodoList items={todos} onRemoveTodo={onRemoveTodo} />
    </div>
  );
};

export default App;
