import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface CardFormProps extends PropsWithChildren {
  status: string;
}
const CardForm = ({ status, children }: CardFormProps) => {
  return <div className={classNames(`${status}-card`)}>{children}</div>;
};

export default CardForm;
