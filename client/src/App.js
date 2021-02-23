import React from "react";
import "./index.scss";
import Navbar from "./Component/Navbar/Navbar";
import Index from "./Component/Home/index";
import Footer from "./Component/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
