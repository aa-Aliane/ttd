import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import  Provider  from "./ContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Provider>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
