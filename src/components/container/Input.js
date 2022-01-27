const Input = (props) => {
  return (
    <div className="input-container">
      <span className="input-title">{props.title}</span>
      {props.children}
    </div>
  );
};

export default Input;
