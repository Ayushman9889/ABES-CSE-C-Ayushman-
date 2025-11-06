import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register-container">
      <h1>Create Account</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>

      <p className="login-redirect">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Register;
