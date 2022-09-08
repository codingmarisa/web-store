import Form from '../../generic-components/forms/form/form.component';

const SignIn = () => {
  const handleChange = (event) => {
    const { name, value } = event.target;
  };

  return (
    <div className="sign-in-container">
      <Form
        title="Sign In"
        description="Sign In Description"
        btn="Sign In"
        inputs={[
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
        ]}
      />
    </div>
  );
};

export default SignIn;
