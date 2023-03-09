import { isValidElement, PropsWithChildren } from 'react';
import type { LabelProps, DescriptionProps } from './FormFieldControl.types';
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
FormFieldControl.Description = ({
  isError,
  children,
}: PropsWithChildren<DescriptionProps>) => {
  return <Styled.Description isError={isError}>{children}</Styled.Description>;
};

export default FormFieldControl;
