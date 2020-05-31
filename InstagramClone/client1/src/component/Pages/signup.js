import React from "react";
//import Signup from './../../../../client/src/component/Pages/signup';
import { Link } from "react-router-dom";

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
        <p>
          <Link to="/login">Already have an account ?</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
