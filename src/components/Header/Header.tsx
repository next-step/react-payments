import Styled from "./Header.styles";

interface Props {
  title: string;
  goBackLink?: string;
}

const Header = ({ title, goBackLink }: Props) => {
  return (
    <Styled.Header>
      {goBackLink && (
        <Styled.GoBackLink to={goBackLink}>
          <Styled.GoBackIcon />
        </Styled.GoBackLink>
      )}
      <Styled.Title>{title}</Styled.Title>
    </Styled.Header>
  );
};

export default Header;
export { Props };
