function Text(props) {
  const { className, text } = props;

  return <span className={className}>{text}</span>;
}

export default Text;
