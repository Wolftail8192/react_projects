import './App.css';
import {useEffect, useState} from "react";
import Flights from "./Components/Flights";

function App() {

  return (
    <div className="App">
        {
            <Flights/>
        }
    </div>
  );
}

export default App;
