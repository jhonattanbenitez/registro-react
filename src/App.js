import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

import "./App.css";

const WebPage = () => (
  <div>
    <h1>web Page</h1>
  </div>
);

const Tecnipapel = () => (
  <div>
    <h1>Tecnipapel</h1>
    <div>ddfdff</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/webpage" component={WebPage} />
        <Route path="/tecnipapel" component={Tecnipapel} />
      </Switch>
    </div>
  );
}

export default App;
