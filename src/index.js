import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Waterfall,
  Granular,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/waterfall" element={<Waterfall />} />
      <Route path="/granular" element={<Granular />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);