function Title(props) {
  const { extraClassName = '', title, onClick } = props;

  return (
    <h2 className={`page-title ${extraClassName}`} onClick={onClick}>
      {title}
    </h2>
  );
}

export default Title;
