function Text(props) {
  const { className, text, onClick } = props;

  return (
    <span className={className} onClick={onClick}>
      {text}
    </span>
  );
}

export default Text;
