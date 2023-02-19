import { Link } from "react-router-dom";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <Link to="/" className="hide-under-line">
      <h2 className="page-title"> &lt; {title} </h2>
    </Link>
  );
};

export default Header;
