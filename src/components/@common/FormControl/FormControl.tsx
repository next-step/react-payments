import { PropsWithChildren } from 'react';
import * as Styled from './FormControl.styled';

const FormControl = ({ children }: PropsWithChildren) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
FormControl.Label = ({ children }: PropsWithChildren) => {
  return <Styled.Label>{children}</Styled.Label>;
};
FormControl.Separator = ({ children }: PropsWithChildren) => {
  return <Styled.Separator>{children}</Styled.Separator>;
};
export default FormControl;
