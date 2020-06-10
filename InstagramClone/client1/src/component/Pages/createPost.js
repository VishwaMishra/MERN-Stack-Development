import { React, useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "diy3aiam4");
    fetch("	https://api.cloudinary.com/v1_1/diy3aiam4/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.image);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch("/createpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        image
      }),
    }).then(res=>res.json()).then(data=>{
      
    })
  };
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
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <div className="file-field input-field">
        <div className="btn">
          <span>File</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn waves-effect wave-light #64b5f6 blue darken-1"
        onClick={(e) => postDetails()}
      >
        Submit Post
      </button>
    </div>
  );
};

export default CreatePost;
