import { RestProps } from '@/types';
import { INPUT } from './input.constant';

export type InputType = (typeof INPUT.TYPE)[keyof typeof INPUT.TYPE];

export type Separator =
  (typeof INPUT.BOX.SEPARATOR)[keyof typeof INPUT.BOX.SEPARATOR];

export interface InputFactoryProps extends RestProps {
  // 사용처에서 type을 확인할 수 있도록 정의된 InputType을 사용하지 않았습니다.
  type: (typeof INPUT.TYPE)[keyof typeof INPUT.TYPE];
  ref?: React.Ref<HTMLInputElement>;
}

export interface DefaultInputProps {
  className?: string;
  type: InputType;
}

export interface InputBoxProps extends RestProps {
  children: React.ReactNode;
  className?: string;
  separator?: {
    fieldsFulfilled: boolean[];
    symbol: Separator;
  };
}
