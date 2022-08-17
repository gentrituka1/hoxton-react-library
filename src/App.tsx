import { useState } from "react";
import "./App.css";
import { Menu } from "./components/Main";

function App() {

  const [hungry, setHungry] = useState(false);

  return (
    <div className="App">

      {hungry ? <h1>I'm hungry</h1> : <h1>I'm not hungry</h1>}

      <Menu setHungry={setHungry} />
    </div>
  );
}

export default App;
