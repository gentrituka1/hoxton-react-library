import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">

      <Button
        text="GREET"
        action={() => {
          alert("Hello World!");
        }}
      />
      <Button
        text="GO BACK"
        action={() => {
          alert("Going Back...");
        }}
      />
      <Button
        text="GO FORWARD"
        action={() => {
          alert("Going Forward...");
        }}
      />
      <Button
        text="WOW"
        action={() => {
          alert("WOW...");
        }}
      />
    </div>
  );
}

export default App;
