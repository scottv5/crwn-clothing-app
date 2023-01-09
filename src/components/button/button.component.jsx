import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  default: "default",
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType = "default", ...otherProps }) => {
  return (
    <button
      className={`button-container${
        BUTTON_TYPE_CLASSES[buttonType]
          ? " " + BUTTON_TYPE_CLASSES[buttonType]
          : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
