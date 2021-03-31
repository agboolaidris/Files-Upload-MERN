import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setstate] = useState();
  const handleChange = (e) => {
    setstate(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    console.log(state);
  };
  return (
    <div className="App">
      <input type="file" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
