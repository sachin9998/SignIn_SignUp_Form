import "./LoginSignup.css";

import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import user_icon from "../../assets/person.png";

const LoginSignup = () => {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="text">Signup</div>
        <div className="underline"></div>
      </div>

      {/* Inputs */}
      <div className="inputs"></div>

      <div className="input">
        <img src={user_icon} alt="" />
        <input type="text" />
      </div>

      <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" />
      </div>

      <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" />
      </div>
    </div>
  );
};

export default LoginSignup;
