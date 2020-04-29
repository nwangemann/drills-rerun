import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')
  return (
    <React.Fragment>
      <input type="text" onChange={e => setText(e.target.value)} />
      {text}
    </React.Fragment>
  );
}

export default App;
