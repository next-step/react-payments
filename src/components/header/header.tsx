type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return <h2 className="page-title"> &lt; {title} </h2>;
};

export default Header;
