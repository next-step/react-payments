import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
type BaseCardFormProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
interface CardFormProps extends BaseCardFormProps, PropsWithChildren {
  status: string;
}
const CardForm = ({ status, children, style }: CardFormProps) => {
  return (
    <div className={classNames(`${status}-card`)} style={style}>
      {children}
    </div>
  );
};

export default CardForm;
