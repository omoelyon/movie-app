import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movie from "./Home";
import SearchMovie from "./SearchMovie";
import Particles from "react-particles-js";
import "./index.css";

const App = () => {
  return (
    <div>
      <Particles
        canvasClassName="particle-canvas"
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                // color: "#3CA9D1",
                blur: 5
              }
            }
          }
        }}
        style={{
          width: "100%",
          color: "blue",
          backgroundColor: "gray",
          zIndex:-1,
        }}
      />
      <Router>
        <Switch>
          <Router>
            <Route exact={true} path="/" component={Movie} />
            <Route path="/search" component={SearchMovie} />
          </Router>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
