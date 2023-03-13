import {useSelector} from 'react-redux'
import Counter from "./Counter";
import "./App.css";
import { RootState } from './Redux/store';
import Bonus from './Bonus';
import Todo from './Todo';


function App() {

  
  const count = useSelector((state : RootState) => state.counter.value);
  return (
    <div className="App" style={{
      display : "flex",
      alignItems : "center",
      flexDirection : "column",
      gap : "10px"
}}>
      Amount is $ {count}
      <Counter />
      <hr  style={{
        width : "100%"

      }}/>
      <Bonus />
      <hr style={{
        width : "100%"
      }}/>
      <Todo />
    </div>
  );
}

export default App;
