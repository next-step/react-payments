import classNames from 'classnames';
import {type DetailedHTMLProps, type HTMLAttributes, type PropsWithChildren} from 'react';
type BaseCardFormProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type CardFormProps = {
  status: string;
} & BaseCardFormProps & PropsWithChildren;
const CardForm = ({status, children, style}: CardFormProps) => (
  <div className={classNames(`${status}-card`)} style={style}>
    {children}
  </div>
);

export default CardForm;
