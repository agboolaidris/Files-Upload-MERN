import React from "react";
import Header from "./layout/header/header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UploadContainer from "./container/upload";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={UploadContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
