import "./LoginSignup.css";

import { useState } from "react";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import user_icon from "../../assets/person.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  const handleSignup = () => {
    setAction("Sign Up");
  };
  const handleLogin = () => {
    setAction("Login");
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      {/* Inputs */}
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email ID" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action === "Login" && (
        <div className="forget-password">
          Lost Password? <span>Click Here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          onClick={handleSignup}
          className={action === "Login" ? "submit gray" : "submit"}
        >
          Sign Up
        </div>
        <div
          onClick={handleLogin}
          className={action === "Sign Up" ? "submit gray" : "submit"}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
