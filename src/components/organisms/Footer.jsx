import Text from '../atoms/Text';

function Footer(props) {
  const { extraClassName, onClick } = props;

  return (
    <div className={`button-box ${extraClassName || ''}`}>
      <Text className="button-text" text="다음" onClick={onClick} />
    </div>
  );
}

export default Footer;
