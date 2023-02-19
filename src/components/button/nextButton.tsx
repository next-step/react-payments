import { Link } from "react-router-dom";

type NextButtonProps = {
  path: string;
};

const NextButton = ({ path }: NextButtonProps) => {
  return (
    <div className="button-box">
      <Link to={path}>
        <span className="button-text">다음</span>
      </Link>
    </div>
  );
};

export default NextButton;
