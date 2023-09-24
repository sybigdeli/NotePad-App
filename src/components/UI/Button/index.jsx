import "./button.css";

const button = ({children , onClick , varient , type = "button"}) => {
  return <button className={`note-button note-button--${varient}`} onClick={onClick} type={type}>{children}</button>;
};

export default button;
