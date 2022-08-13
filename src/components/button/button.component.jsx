import './button.styles.scss';

const BUTTON_TYPE_CLASS = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, ButtonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASS[ButtonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
