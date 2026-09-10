import "./LoginForm.css";
const LoginForm=() =>{

return(
  <>
<div className="form">

        <h1>
          {login
            ? "Log in to your existing profile"
            : "Join us to start coding"}
        </h1>

        <button className="google">
          🌐 Continue with Google
        </button>

        <div className="or">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        {/* Signup fields */}
        {!login && (
          <input
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          type={login ? "text" : "email"}
          placeholder={login ? "Username or Email" : "Email"}
        />

        <input
          type="password"
          placeholder="Password"
        />

        {/* Signup checkbox */}
        {!login && (
          <label>
            <input type="checkbox" />
            I agree to Terms and Privacy Policy
          </label>
        )}

        <button className="main-btn">
          {login ? "LOGIN" : "REGISTER"}
        </button>

        {login && (
          <a href="#">Forgot Password?</a>
        )}

      </div>
      </>
    )
}

export default LoginForm;