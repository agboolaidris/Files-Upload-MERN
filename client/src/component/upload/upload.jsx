import React from "react";

function Upload({ handleChange, handleSubmit, state }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={state.name}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="file"
          accept="png jpeg jpg"
          required
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Upload;
