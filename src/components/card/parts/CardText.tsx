import classNames from 'classnames';
import { type HTMLAttributes, type PropsWithChildren } from 'react';

type BaseCardTextProps = HTMLAttributes<HTMLSpanElement>;

type CardTextProps = {
  status: string;
} & PropsWithChildren<BaseCardTextProps>;

const CardText = ({ status, children }: CardTextProps) => (
  <span className={classNames(status === 'big' ? 'card-text__big' : 'card-text')}>{children}</span>
);

export default CardText;
