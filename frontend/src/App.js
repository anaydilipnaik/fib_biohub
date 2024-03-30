// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import FibOutput from "./views/FibOutput";
import { NProvider } from "./contexts/Context";

const App = () => {
  return (
    <Router>
      <NProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fib-output" element={<FibOutput />} />
        </Routes>
      </NProvider>
    </Router>
  );
};

export default App;
