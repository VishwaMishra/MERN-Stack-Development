import React from "react";

const CreatePost = () => {
  return (
    <div
      className="card input-filed"
      style={{
        margin: "50px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />

      <div class="file-field input-field">
        <div className="btn">
          <span>File</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn waves-effect wave-light #64b5f6 blue darken-1">
        Submit Post
      </button>
    </div>
  );
};

export default CreatePost;
