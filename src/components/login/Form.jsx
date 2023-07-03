import React, { useState } from "react";

import "./Form.css";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorName, setErrorName] = useState("");

  const redirect = useNavigate();

  const signIn = () => {
    if (email !== "" && password !== "") {
      if (email.includes("@")) {
        let data = { email: email, password: password };
        console.log(data);
        setError(false);
        setErrorName("");
        setEmail("");
        setPassword("");
      } else {
        setErrorName("Invalid Credentials");
        setError(true);
      }
    } else {
      setErrorName("Please fill all the fields");
      setError(true);
    }
  };

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
        <div className="input">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            id="inputEmail"
            value={email}
            placeholder="Example@email.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="inputPass">Password</label>
          <input
            type="password"
            id="inputPass"
            value={password}
            placeholder="At least 8 characters"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="forgetPass">
          <div></div>
          <div className="forgetPass">Forgot Password?</div>
        </div>
        {error && <div className="error">{errorName}</div>}
        <div className="signIn">
          <button onClick={signIn}>Sign In</button>
        </div>
      </div>
      <div className="newAcc">
        Don't you have an account?
        <span
          className="highlighted"
          onClick={() => {
            redirect("/signUp");
          }}
        >
          {" "}
          Sign up
        </span>
      </div>
      <div className="copyright">© 2023 ALL RIGHTS RESERVED</div>
    </div>
  );
}
