import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";
import UserContext from "../utils/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUserName } = useContext(UserContext);
  const [name, setName] = useState(''); 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (you can add it later)
    setUserName('Welcome, '+ name);
    navigate("/");
  };

  const handleUsernameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={name}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
