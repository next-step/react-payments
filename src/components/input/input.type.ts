import { ContainerProps, RestProps } from '@/types';
import { INPUT } from './input.constant';

export type InputType =
  (typeof INPUT.FACTORY)[keyof typeof INPUT.FACTORY]['TYPE'];

export type Separator =
  (typeof INPUT.BOX.SEPARATOR)[keyof typeof INPUT.BOX.SEPARATOR];

export interface InputFactoryProps extends RestProps {
  type: InputType;
}

export interface DefaultInputProps {
  className?: string;
  type: InputType;
}

export interface InputBoxProps extends ContainerProps {
  separator?: Separator;
  className?: string;
}
