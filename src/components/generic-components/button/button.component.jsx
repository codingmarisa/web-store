import './button.styles.css';

const Button = ({ text }) => {
  return <button className={`button-container`}>{text}</button>;
};

export default Button;
