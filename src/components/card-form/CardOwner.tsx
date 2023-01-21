import { Input, InputBox } from "../atoms";
import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";
import { ICard } from "../../domain";

interface IProps {
  changeCardState: (newCardState: Partial<ICard>) => void;
  // focusNext: () => void;
}

const CardOwner = forwardRef(
  ({ changeCardState }: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const $input = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => $input.current!);

    return (
      <InputBox>
        <Input
          ref={$input}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </InputBox>
    );
  }
);

CardOwner.displayName = "CardOwner";

export default CardOwner;
