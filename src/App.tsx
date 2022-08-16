import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Main } from "./components/Main";

function App() {

  const [hungry, setHungry] = useState(false);

  return (
    <div className="App">

      {hungry ? <h1>I'm hungry</h1> : <h1>I'm not hungry</h1>}

      <Main setHungry={setHungry} />
    </div>
  );
}

export default App;
