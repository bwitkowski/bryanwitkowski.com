import './App.css';
import { useState } from 'react';

function App() {
  //let myMessage = "Fall 2023 Cloud for Developers";
  const [myMessage, setMyMessage] = useState("Fall 2024 C#");

  const changeMessage = (event) => {
    setMyMessage(event.target.value);
  }
  return (
    <div className="App">
      <input onChange={changeMessage} type="text" value={myMessage} />
      <h1>{myMessage}</h1>
    </div>
  );
}

export default App;
