import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Loader from "./components/Loader";

function App() {


  return (
    <div>
      <Loader />
      <Home />
    </div>

  );
}

export default App;
