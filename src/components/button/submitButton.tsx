type ButtonProps = {
  text: string;
};
const SubmitButton = ({ text }: ButtonProps) => {
  return (
    <div className="button-box">
      <input
        style={{ border: "none", background: "none" }}
        type="submit"
        value={text}
      ></input>
    </div>
  );
};

export default SubmitButton;
