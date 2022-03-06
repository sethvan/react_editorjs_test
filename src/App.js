import React from "react";
import "./App.css";
import Editable from "./Editor/Editable";
import ReadOnly from "./Editor/ReadOnly";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Editable} />
      <Route exact path="/render" component={ReadOnly} />
    </Router>
  );
}

export default App;
