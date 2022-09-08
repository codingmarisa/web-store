import './button.styles.css';

const Button = ({ children, styleName, ...otherAttributes }) => {
  return (
    <button className={`button ${styleName}`} {...otherAttributes}>
      {children}
    </button>
  );
};

export default Button;
