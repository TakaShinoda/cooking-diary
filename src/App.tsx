import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Posts } from "./components/Posts";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <p>こんにちは</p>
      <Router>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <Link to="/Posts">投稿</Link>
              </li>
              <li>
                <Link to="/RecipeList">見る</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/Posts">
              <Posts />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
