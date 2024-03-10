function Title(props) {
  const { extraClassName = '', title, onClick } = props;

  return (
    <h2 className={`page-title ${extraClassName}`}>
      {onClick !== undefined ? (
        <button type="button" className="button-as-link" onClick={onClick}>
          {title}
        </button>
      ) : (
        title
      )}
    </h2>
  );
}

export default Title;
