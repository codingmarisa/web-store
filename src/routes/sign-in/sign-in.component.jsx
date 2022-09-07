import './sign-in.styles.css';

// web: side by side, mobile: top bottom w/jump to register anchor

const SignIn = () => {
  return (
    <div>
      <div className="sign-in-container">
        <h2>Sign In</h2>
      </div>
      <div className="register-container">
        <h2>Register</h2>
      </div>
    </div>
  );
};

export default SignIn;
