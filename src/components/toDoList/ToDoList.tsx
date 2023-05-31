import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
export type todoItem = {
  todoTitle: string;
  todoDate: string;
  selectedProgres: string;
};

export default function ToDoList() {
  const [todoItem, setTodoitem] = useState({
    todoTitle: "",
    todoDate: "",
    selectedProgres: "",
  });
  const [todoList, setTodoList] = useState<todoItem[]>([]);
  function onchangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoitem({ ...todoItem, todoTitle: event.target.value });
  }
  function onchangeDate(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoitem({ ...todoItem, todoDate: event.target.value });
  }

  function onchangeProgress(event: React.ChangeEvent<HTMLSelectElement>) {
    setTodoitem({ ...todoItem, selectedProgres: event.target.value });
  }

  function OnsubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTodoList([...todoList, todoItem]);
    setTodoitem({
      todoTitle: "",
      todoDate: "",
      selectedProgres: "",
    });
  }

  function removeTodoItem(todo:todoItem){
    const results = todoList.filter((item)=>item.todoTitle!==todo.todoTitle)

    setTodoList(results)
  }
  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={OnsubmitForm}>
        <label>
          title:{" "}
          <input
            type="text"
            onChange={onchangeTitle}
            placeholder="enter your title for this form"
          />
        </label>
        <label>
          date :<input type="date" onChange={onchangeDate} />
        </label>

        <select name="progress" onChange={onchangeProgress}>
          <option value="inprogress">inprogress</option>
          <option value="done">done</option>
          <option value="notstarted">notstarted</option>
        </select>
        <button type="submit">submit</button>
      </form>
      <div>
        {todoList.map((todo) => (
          <ToDoItem todo={todo} removeTodoItem={removeTodoItem } />
        ))}
      </div>
    </div>
  );
}
