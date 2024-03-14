import classNames from 'classnames';
import { DetailedHTMLProps, PropsWithChildren } from 'react';

type BaseCardTextProps = DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
interface CardTextProps extends BaseCardTextProps, PropsWithChildren {
  status: string;
}

const CardText = ({ status, children }: CardTextProps) => {
  return (
    <span className={classNames(status === 'big' ? 'card-text__big' : 'card-text')}>
      {children}
    </span>
  );
};

export default CardText;
