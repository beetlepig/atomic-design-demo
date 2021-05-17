import React from 'react';
import HomePage from "./Pages/Home";
import {ScreenClassProvider, setConfiguration} from "react-grid-system";

setConfiguration({gridColumns: 24});

function App() {
  return (
    <div className="App">
        <ScreenClassProvider>
          <HomePage />
        </ScreenClassProvider>
    </div>
  );
}

export default App;
