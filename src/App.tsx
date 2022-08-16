import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {

  const [hungry, setHungry] = useState(false);

  return (
    <div className="App">

      {hungry ? <h1>I'm hungry</h1> : <h1>I'm not hungry</h1>}

      <Button
        text="EAT"
        handleClick={() => {
          setHungry(false);
        }}
        handleDoubleClick={() => {
          alert("DOUBLE WOW...");
        }}
        handleMouseEnter={() => {
          alert("MOUSE ENTER...");
        }}
      />
      <Button
        text="Workout"
        handleClick={() => {
          setHungry(true);
        }}
        
      />
    </div>
  );
}

export default App;
