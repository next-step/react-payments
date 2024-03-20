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
  /**
   * InputBox에 적용할 클래스명
   */
  className?: string;
  /**
   * InputBox를 구분자로 나눌지 여부
   */
  separator?: {
    /**
     * InputBox를 구분자로 나눌지 여부
     * @default false
     * @example
     * ```tsx
     * <InputBox separator={{ symbol: INPUT.BOX.SEPARATOR.HYPHEN, fieldsFulfilled: [true, true, false] }}>
     *   <input type='text' />
     *   <input type='text' />
     *   <input type='text' />
     * </InputBox>
     * ```
     * @description
     * - `fieldsFulfilled`의 길이는 children의 개수와 같아야 합니다.
     * - `fieldsFulfilled`의 값이 `true`인 경우 구분자가 표시됩니다.
     * - `fieldsFulfilled`의 값이 `false`인 경우 구분자가 표시되지 않습니다.
     */
    fieldsFulfilled: boolean[];

    /**
     * 렌더링할 구분자(기본값: HYPHEN('-')
     * options: HYPHEN('-') | SLASH('/')
     */
    symbol: Separator;
  };
}
