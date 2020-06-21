import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./redux";
import { Provider } from "react-redux";
import "./styles.css";

import Home from "./components/Home";
import Launch from "./components/Launch";
import LaunchIndex from "./components/LaunchIndex";
import LaunchShoe from "./components/LaunchShoe";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Nav from "./components/Nav";

const store = configureStore({
  reducer: Reducer
});

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="launch" element={<Launch />}>
              <Route path="/" element={<LaunchIndex />} />
              <Route path=":slug" element={<LaunchShoe />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
