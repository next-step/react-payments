import { Link } from 'react-router-dom';

import classnames from 'classnames';

type ClickableLinkProps = {
  className?: string;
  location: string;
  text: string;
  disable?: boolean;
  onClick?: (value: any) => void;
};

export default function ClickableLink({
  className,
  location,
  text,
  disable,
  onClick,
}: ClickableLinkProps) {
  return (
    <div className={classnames('button-box', className)}>
      <span className="button-text">
        <Link
          to={disable ? '' : location}
          className="button-basic"
          onClick={onClick}
        >
          {text}
        </Link>
      </span>
    </div>
  );
}
