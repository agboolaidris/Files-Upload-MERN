import React from "react";
import "./index.scss";
import Navbar from "./Component/Navbar/Navbar";
import Index from "./Component/Home/index";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
