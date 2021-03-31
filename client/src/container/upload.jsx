import React, { useState } from "react";
import UploadComponent from "../component/upload/upload";

function Upload() {
  const [state, setstate] = useState({
    file: "",
    name: "",
  });
  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
      file: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData({
      name: "jjjjjjj",
    });
    formData.append("myfile", state.file);

    console.log(state);
    console.log(formData);
  };
  return (
    <UploadComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      state={state}
    />
  );
}

export default Upload;
