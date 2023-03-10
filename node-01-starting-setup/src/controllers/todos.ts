import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res) => {
  const { text } = req.body as { text: string };
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);

  res.status(201).json({ createTodo: newTodo });
}

export const getTodos: RequestHandler = (req, res) => {
  return res.status(200).json({ todos: TODOS });
}

export const updateTodo: RequestHandler<{ id: string }> = (req, res) => {
  const id = req.params.id;
  const { text } = req.body as { text: string };

  const todoIndex = TODOS.findIndex(el => el.id === id);
  if (todoIndex < 0) {
    throw new Error('Cannot find element with that index!');
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, text);

  res.status(200).json({ updatedTodo: TODOS[todoIndex]});
}

export const deleteTodo: RequestHandler<{ id: string }> = (req, res) => {
  const id = req.params.id;
  const todoIndex = TODOS.findIndex(el => el.id === id);
  if (todoIndex < 0) {
    throw new Error('Cannot find todo with that index');
  }

  TODOS.splice(todoIndex, 1);

  res.status(200).json({ message: 'Todo deleted '});
}