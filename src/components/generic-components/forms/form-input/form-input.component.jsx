import './form-input.styles.css';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input-container">
      <input className="form-input" {...otherProps} />
      {label && <label className="label">{label}</label>}
    </div>
  );
};

export default FormInput;
