import React, { useRef } from 'react';

import './NewTodo.css';

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    props.onAddTodo(enteredText);
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor="todo-text">New Todo text</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
