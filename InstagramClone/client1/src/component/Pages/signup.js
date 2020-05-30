import React from "react";
//import Signup from './../../../../client/src/component/Pages/signup';
const Signup = () => {
  return (
    <div className="Login-Section">
      <div className="card">
        <h2>Instagram</h2>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="password"></input>
        <button
          className="btn waves-effect waves-light "
          type="submit"
          name="action"
        >
          Signup
          {/* <i class="material-icons right">send</i> */}
        </button>
      </div>
    </div>
  );
};

export default Signup;
