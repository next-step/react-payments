import { Link } from 'react-router-dom';

import classnames from 'classnames';

type ClickableLinkProps = {
  className?: string;
  location: string;
  text: string;
};

export default function ClickableLink({
  className,
  location,
  text,
}: ClickableLinkProps) {
  return (
    <div className={classnames('button-box', className)}>
      <span className="button-text">
        <Link to={location} className="button-basic">
          {text}
        </Link>
      </span>
    </div>
  );
}
