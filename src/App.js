import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="app">
      <Router>
        <ScrollToTop />

        <Route path="/" exact component={Main} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/projects" exact component={ProjectPage} />

        <NavLink to="/" />
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
