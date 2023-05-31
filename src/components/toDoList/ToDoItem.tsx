import React from 'react'
import { todoItem } from './ToDoList'


type prop = {
  todo: todoItem;
  removeTodoItem:(todo:todoItem)=>void
};

export default function ToDoItem({todo ,removeTodoItem}:prop) {
  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
      <p>{todo.todoTitle}</p>
      <p>{todo.todoDate}</p>
      <p>{todo.selectedProgres}</p>
      <button type="submit" onClick={() => removeTodoItem(todo)}>
        delete
      </button>
    </div>
  );
}
