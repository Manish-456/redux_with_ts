
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "./Redux/store";
import { toggleTasks } from './Redux/TodoSlice';

const Todos = () => {
  const todo = useSelector((state: RootState) => state.todo);

   const dispatch = useDispatch();

  
  return (
    <div
      style={{
        marginTop: "2rem",
      }}
    >
      {todo?.map((task, index) => (
        <div
          key={index}
          style={{ display: "flex", gap: "20px", justifyContent: "center" }}
        >
          <label htmlFor="" style={{
            display : "flex",
            gap : "1rem",
            textDecoration : task.completed ? "line-through" : "none"

          }}>
          <input type="checkbox" onChange={() => dispatch(toggleTasks(index))}  name="" id="" />
        <span>{task.task}</span>
       </label> </div>
      ))}
    </div>
  );
};

export default Todos;
