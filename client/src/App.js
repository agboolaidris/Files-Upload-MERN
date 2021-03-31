import React from "react";
import Header from "./layout/header/header";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
