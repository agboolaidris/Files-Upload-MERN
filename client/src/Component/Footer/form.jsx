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
    console.log(state);
    axios
      .post("/api", state)
      .then((res) => {
        toast.success("message send successfully");
        console.log(res);
      })
      .catch((err) => {
        toast.error("it look like an error occur");
      });
    setstate({
      ...state,
      name: "",
      message: "",
      email: "",
    });
  };
  return (
    <div className="div">
      <div className="title">
        <h2>Contact</h2>
        <div className="underline"></div>
        <p>let work together</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            required
            placeholder="Name"
            value={state.name}
            id="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            required
            placeholder="Email"
            value={state.email}
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
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

      <a className="footer-logo" onClick={() => animateScroll.scrollToTop()}>
        <i className="fas fa-angle-double-up fa-2x"></i>
      </a>
    </div>
  );
}

export default Form;
