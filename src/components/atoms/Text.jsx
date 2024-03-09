function Text(props) {
  const { className, text, onClick } = props;

  return (
    <span className={className}>
      {onClick !== undefined ? (
        <button type="button" className="button-as-link" onClick={onClick}>
          {text}
        </button>
      ) : (
        text
      )}
    </span>
  );
}

export default Text;
