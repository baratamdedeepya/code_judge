import { useState } from "react";
import "./Auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* Toggle Buttons */}
        <div className="auth-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Heading */}
        <h2>{isLogin ? "Welcome Back!" : "Create Account"}</h2>

        <p className="auth-subtitle">
          {isLogin
            ? "Login to continue to Code_Judge"
            : "Register to start coding with Code_Judge"}
        </p>

        {/* Form */}
        <form>

          {!isLogin && (
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button className="submit-btn" type="submit">
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        {/* Bottom Toggle */}
        <p className="bottom-text">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Register" : " Login"}
          </span>
        </p>

      </div>
    </div>
  );
}

export default Auth;