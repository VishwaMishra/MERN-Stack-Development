import React, { useState } from "react";
//import Signup from './../../../../client/src/component/Pages/signup';
import { Link } from "react-router-dom";
import M from "materialize-css";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const PostData = () => {
    fetch("http://localhost:5000/signup", {
      mathod: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "",
        password: "",
        email: "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error });
        }
      });
  };

  return (
    <div className="Login-Section">
      <div className="card">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className="btn waves-effect waves-light "
          type="submit"
          name="action"
          onClick={() => PostData}
        >
          Signup
          {/* <i class="material-icons right">send</i> */}
        </button>
        <p>
          <Link to="/login">Already have an account ?</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
