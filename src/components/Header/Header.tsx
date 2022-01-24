import Styled from "./Header.styles";

interface Props {
  children?: React.ReactNode;
  goBackLink?: string;
}

const Header = ({ children, goBackLink, ...restProps }: Props) => {
  return (
    <Styled.Header {...restProps}>
      {goBackLink && (
        <Styled.GoBackLink to={goBackLink}>
          <Styled.GoBackIcon />
        </Styled.GoBackLink>
      )}
      <Styled.Title>{children}</Styled.Title>
    </Styled.Header>
  );
};

export default Header;
export { Props };
