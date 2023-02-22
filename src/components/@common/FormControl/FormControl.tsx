import { isValidElement, PropsWithChildren } from 'react';
import type { LabelProps } from './FormControl.types';
import * as Styled from './FormControl.styled';
import { Help } from 'components/Help';

const FormControl = ({ children }: PropsWithChildren) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
FormControl.Label = ({ help, children }: PropsWithChildren<LabelProps>) => {
  return (
    <Styled.Label>
      {children}
      {isValidElement(help) && <Help>{help}</Help>}
    </Styled.Label>
  );
};
FormControl.Separator = ({ children }: PropsWithChildren) => {
  return <Styled.Separator>{children}</Styled.Separator>;
};
export default FormControl;
