import Register from '../../components/webstore-components/register/register.component';
import SignIn from '../../components/webstore-components/sign-in/sign-in.component';

import './sign-in-page.styles.css';

// web: side by side, mobile: top bottom w/jump to register anchor

const SignInPage = () => {
  return (
    <div className="sign-in-page-container">
      {/* sign-in form */}
      <div className="sign-in-container">
        <SignIn />
      </div>
      {/* register form */}
      <div className="register-container">
        <Register />
      </div>
    </div>
  );
};

export default SignInPage;
