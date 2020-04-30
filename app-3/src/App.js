import React, {useState} from "react";
import "./App.css";

function App() {
  const [list, setList] = useState(['first', 'second', 'third', 'fourth', 'fifth']);
  const [input, setInput] = useState("");

  let filteredList = list.filter((elem) => {
    return (elem.startsWith(input))
  });
    
  let mappedList = filteredList.map((elem) => {
    return <li>{elem}</li>;
  });
  return (
    <React.Fragment>
      <ul>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          name="input"
        />
        {mappedList}
      </ul>
    </React.Fragment>
  );
}

export default App;
