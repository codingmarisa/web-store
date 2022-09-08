import { useState, useContext } from 'react';

import FormInput from '../../generic-components/forms/form-input/form-input.component';
import Button from '../../generic-components/button/button.component';
// import { UserContext } from '../../contexts/user.context';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from '../../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMsg, setErrorMsg] = useState('');
  const { displayName, email, password, confirmPassword } = formFields;
  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocument(user, { displayName });
      resetFormFields();
      setErrorMsg('');
      // setCurrentUser(user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMsg('A user with this email already exists.');
      } else {
        setErrorMsg('Error creating user, please try again later.');
        console.log('User creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="register-container">
      <h2>Register Heading</h2>
      <span>Register Description</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Display Name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <FormInput
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        {errorMsg ? <p>{errorMsg}</p> : null}
        <Button type="submit" text="Sign Up" />
      </form>
    </div>
  );
};

export default Register;
