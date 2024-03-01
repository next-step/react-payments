function Title(props) {
  const { extraClassName, title } = props;

  return <h2 className={`page-title ${extraClassName || ''}`}>{title}</h2>;
}

export default Title;
