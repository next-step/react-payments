import Title from '../atoms/Title';

function Header(props) {
  const { onClick } = props;

  return <Title title="< 카드 추가" onClick={onClick} />;
}

export default Header;
