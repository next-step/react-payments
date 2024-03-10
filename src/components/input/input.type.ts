import { InputHTMLAttributes, PropsWithChildren } from 'react';
import { INPUT } from './input.constant';

export type InputType = (typeof INPUT.TYPE)[keyof typeof INPUT.TYPE];

export type Separator =
  (typeof INPUT.BOX.SEPARATOR)[keyof typeof INPUT.BOX.SEPARATOR];

type InputRestProps = InputHTMLAttributes<HTMLInputElement>;

export interface InputFactoryProps extends InputRestProps {
  // 사용처에서 type을 확인할 수 있도록 정의된 InputType을 사용하지 않았습니다.
  type: InputType;
  ref?: React.Ref<HTMLInputElement>;
}

export interface DefaultInputProps extends InputRestProps {
  className?: string;
  type: InputType;
}

export interface InputBoxProps extends PropsWithChildren {
  className?: string;
  separator?: {
    fieldsFulfilled: boolean[];
    symbol: Separator;
  };
}
