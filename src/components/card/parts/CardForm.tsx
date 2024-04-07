import classNames from 'classnames';
import { type HTMLAttributes, type PropsWithChildren } from 'react';
type BaseCardFormProps = HTMLAttributes<HTMLDivElement>;
type CardFormProps = {
  status: string;
} & PropsWithChildren<BaseCardFormProps>;

const CardForm = ({ status, children, style }: CardFormProps) => (
  <div className={classNames(`${status}-card`)} style={style}>
    {children}
  </div>
);

export default CardForm;
