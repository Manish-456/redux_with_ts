import React from "react";
import Todos from "./Todos";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "./Redux/TodoSlice";

const Todo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          type="text"
          style={{
            width: "100%",
            padding: "16px",
          }}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add todo"
        />
        <button onClick={() => dispatch(addTasks({task, completed : false, id : Math.floor(Math.random() * 5) + new Date().getSeconds()}))}>Add</button>
        <Todos />
      </div>
    </div>
  );
};

export default Todo;
