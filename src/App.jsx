import { useState } from "react";

import "./App.css";
import React from "react";
import Home from "./screens/Home";
import NavBar from "./components/navbar/NavBar";
import { Provider } from "react-redux";
import store from "./redux/store";
import BooksSelected from "./components/navbar/BooksSelected";

function App() {
  return (
    <div className="w-full m-auto">
      <Provider store={store}>
        <NavBar />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
