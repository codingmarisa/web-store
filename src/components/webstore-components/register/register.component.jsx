import Form from '../../generic-components/forms/form/form.component';

const Register = () => {
  const handleChange = (event) => {
    const { name, value } = event.target;
  };

  return (
    <div className="register-container">
      <Form
        title="Register"
        description="Register Description"
        btn="Sign Up"
        inputs={[
          {
            type: 'text',
            label: 'First Name',
            name: 'firstName',
            value: '',
            onChange: handleChange,
            required: true,
          },
          {
            type: 'text',
            label: 'Last Name',
            name: 'lastName',
            value: '',
            onChange: handleChange,
            required: true,
          },
          {
            type: 'email',
            label: 'Email',
            name: 'email',
            value: '',
            onChange: handleChange,
            required: true,
          },
          {
            type: 'password',
            label: 'Password',
            name: 'password',
            value: '',
            onChange: handleChange,
            required: true,
          },
          {
            type: 'password',
            label: 'Confirm Password',
            name: 'confirmPassword',
            value: '',
            onChange: handleChange,
            required: true,
          },
        ]}
      />
    </div>
  );
};

export default Register;
