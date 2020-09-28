import React from "react";
import "./assets/scss/style.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./page/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
