import { ClassNames, ContainerProps, RestProps } from '@/types';
import { INPUT } from './input.constant';

export type Separator = (typeof INPUT.SEPARATOR)[keyof typeof INPUT.SEPARATOR];

export type InputType =
  (typeof INPUT.FACTORY)[keyof typeof INPUT.FACTORY]['TYPE'];

export interface InputFactoryProps extends RestProps {
  type: InputType;
}

export interface DefaultInputProps {
  classNames?: ClassNames;
  type: InputType;
}

export interface InputBoxProps extends ContainerProps {
  classNames?: ClassNames;
  separator?: Separator;
}
