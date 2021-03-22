import React from "react";
import "./index.scss";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./Component/Content/Content";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
