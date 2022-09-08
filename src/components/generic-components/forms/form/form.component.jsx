import FormInput from '../form-input/form-input.component';
import Button from '../../button/button.component';

import './form.styles.css';

const Form = ({ title, description, btn, inputs }) => {
  return (
    <div className="form-container">
      <h2>{title}</h2>
      <span>{description}</span>
      <form onSubmit="">
        {inputs.map((input) =>
          input.required ? (
            <FormInput
              type={input.type}
              label={input.label}
              name={input.name}
              value={input.value}
              onChange={input.onChange}
              required
            />
          ) : (
            <FormInput
              type={input.type}
              label={input.label}
              name={input.name}
              value={input.value}
              onChange={input.onChange}
            />
          )
        )}
        <Button type="submit" text={btn} />
      </form>
    </div>
  );
};

export default Form;
