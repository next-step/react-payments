import { isValidElement, PropsWithChildren } from 'react';
import type { LabelProps } from './FormFieldControl.types';
import * as Styled from './FormFieldControl.styled';
import { Help } from 'components/Help';

const FormFieldControl = ({ children }: PropsWithChildren) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
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
FormFieldControl.Separator = ({ children }: PropsWithChildren) => {
  return <Styled.Separator>{children}</Styled.Separator>;
};
export default FormFieldControl;
