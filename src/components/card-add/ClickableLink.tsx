import { Link } from 'react-router-dom';

import classnames from 'classnames';

type ClickableLinkProps = {
  className?: string;
  location: string;
  text: string;
  onClick: (value: any) => void;
};

export default function ClickableLink({
  className,
  location,
  text,
  onClick,
}: ClickableLinkProps) {
  return (
    <div className={classnames('button-box', className)}>
      <span className="button-text">
        <Link to={location} className="button-basic" onClick={onClick}>
          {text}
        </Link>
      </span>
    </div>
  );
}
