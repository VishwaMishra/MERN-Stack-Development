import React from "react";
const Login = () => {
  return (
    <div className="Login-Section">
      <div className="card">
        <h2>Instagram</h2>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="password"></input>
        <button
          className="btn waves-effect waves-light "
          type="submit"
          name="action"
        >
          Login
          {/* <i class="material-icons right">send</i> */}
        </button>
      </div>
    </div>
  );
};

export default Login;
