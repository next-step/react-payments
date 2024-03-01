import Text from '../atoms/Text';

function Footer(props) {
  const { extraClassName } = props;

  return (
    <div className={`button-box ${extraClassName || ''}`}>
      <Text className="button-text" text="다음" />
    </div>
  );
}

export default Footer;
