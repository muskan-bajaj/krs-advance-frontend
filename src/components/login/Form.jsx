import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <div className="loginForm">
      <div className="heading">
        <div className="mainHeading">👋 Welcome to Explore-Universe</div>
        <div className="subHeading">
          Today is a new day. It's your day. You shape it.
          <br />
          Sign in to start exploring the universe.
        </div>
      </div>
      <div className="formInputs">
        <div className="email">
          <label htmlFor="inputEmail">Email</label>
          <input type="email" placeholder="Example@email.com" />
        </div>
        <div className="password">
          <label htmlFor="inputPass">Password</label>
          <input type="password" placeholder="At least 8 characters" />
        </div>
        <div className="forgetPass">
          <div></div>
          <div className="forgetPass">Forgot Password?</div>
        </div>
        <div className="signIn">
          <button>Sign In</button>
        </div>
      </div>
      <div className="newAcc">Don't you have an account? Sign up</div>
      <div className="copyright">© 2023 ALL RIGHTS RESERVED</div>
    </div>
  );
}
