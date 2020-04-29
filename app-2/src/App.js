import React, { useState } from 'react';
import './App.css';

const defaultList = ['one', 'two', 'three']

function App() {
  const [list, setList] = useState(defaultList)
  const mappedList = list.map(elem => {
  return <li>{elem}</li>
  })
  return (
    <React.Fragment>
      <ul>
        {mappedList}
      </ul>
    </React.Fragment>
  );
}

export default App;
