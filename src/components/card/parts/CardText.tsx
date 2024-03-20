import classNames from 'classnames';
import { type DetailedHTMLProps, type PropsWithChildren } from 'react';

type BaseCardTextProps = DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
type CardTextProps = {
  status: string;
} & BaseCardTextProps &
  PropsWithChildren;

const CardText = ({ status, children }: CardTextProps) => (
  <span className={classNames(status === 'big' ? 'card-text__big' : 'card-text')}>{children}</span>
);

export default CardText;
