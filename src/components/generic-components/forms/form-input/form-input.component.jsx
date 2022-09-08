import './form-input.styles.css';

const FormInput = ({ label, ...inputAttributes }) => {
  return (
    <div className="form-input-container">
      <input className="form-input" {...inputAttributes} />
      <label className="label">{label}</label>
    </div>
  );
};

export default FormInput;
