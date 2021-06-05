import React from "react";
import Lottie from "react-lottie";
import animationData from "./data.json";
import "./App.css";

function App() {
  const [paused, setPaused] = React.useState(false); 
  const [stopped, setStopped] = React.useState(false);
  const defaultOptions = {
    animationData
  };

  return (
    <div className="App">
      <header className="App-header">
        <Lottie
          width={400}
          height={400}
          isPaused={paused}
          isStopped={stopped}
          speed={1}
          options={defaultOptions}
        />
        <div>
          <button onClick={() => setStopped(!stopped)} className="button">
            {stopped ? "Start" : "Restart"}
          </button>
          <button onClick={() => setPaused(!paused)} className="button">
            {paused ? "Resume" : "Pause"}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
