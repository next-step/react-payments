import { Link } from 'react-router-dom';

import classnames from 'classnames';

type ClickableLinkProps = {
  className?: string;
  location: string;
  text: string;
  disable?: boolean;
  isClick?: boolean;
  onClick?: () => void;
};

export default function ClickableLink({
  className,
  location,
  text,
  disable,
  onClick,
  isClick,
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
      {isClick && disable ? (
        <p className="p-error">카드 필드를 모두 채워주세요</p>
      ) : (
        ''
      )}
    </div>
  );
}
