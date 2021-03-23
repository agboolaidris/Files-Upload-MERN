import React, { useState } from "react";
import { animateScroll } from "react-scroll";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
function Form() {
  const [state, setstate] = useState({
    name: "",
    message: "",
    email: "",
  });
  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api", state)
      .then((res) => {
        toast.success("message send successfully");
        console.log(res);
      })
      .catch((err) => {
        toast.error("it look like an error occur");
        console.log(err.response);
      });
    setstate({
      ...state,
      name: "",
      message: "",
      email: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="name">
        <input
          type="text"
          required
          placeholder="Name"
          value={state.name}
          id="name"
          onChange={handleChange}
        />
      </div>
      <div className="email">
        <input
          type="email"
          required
          placeholder="Email"
          value={state.email}
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className="textarea">
        <textarea
          placeholder="your message"
          required
          value={state.message}
          id="message"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="btn">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
