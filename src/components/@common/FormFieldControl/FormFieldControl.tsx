import { isValidElement, PropsWithChildren } from 'react';
import type { LabelProps } from './FormFieldControl.types';
import * as Styled from './FormFieldControl.styled';
import { Help } from 'components/Help';

const FormFieldControl = ({ children }: PropsWithChildren) => {
  return <Styled.Fieldset>{children}</Styled.Fieldset>;
};
FormFieldControl.Label = ({
  help,
  children,
}: PropsWithChildren<LabelProps>) => {
  return (
    <Styled.Label>
      {children}
      {isValidElement(help) && <Help>{help}</Help>}
    </Styled.Label>
  );
};
export default FormFieldControl;
