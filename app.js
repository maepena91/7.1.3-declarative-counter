//Imports
import './App.css';
import{ useState } from "react"; //this is a react hook
//state is data


function App() {
  //2. variables and functions
const [counter, setCounter] = useState(0);
//counter is the variable name
//setCounter is the function that updates the value
//useState is the starting value

  //3. JSX
  return (
    <div className="App">
      
    <div>Hello</div>
    <div>{counter}</div>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

//4.Export
export default App;
