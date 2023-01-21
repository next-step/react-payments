import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { Input, InputBox } from "../atoms";
import { ICard } from "../../domain";
import { useCardOwner } from "./hooks";
import CardOwnerLength from "./CardOwnerLength";

interface IProps {
  changeCardState: (newCardState: Partial<ICard>) => void;
}

const MAX_LENGTH = 30;

const CardOwner = forwardRef(
  ({ changeCardState }: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const $input = useRef<HTMLInputElement>(null);
    const { owner, ownerLength, handleInputOwner } = useCardOwner();

    useImperativeHandle(ref, () => $input.current!);

    useEffect(() => {
      changeCardState({ owner });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [owner]);

    return (
      <InputBox style={{ position: "relative" }}>
        <CardOwnerLength ownerLength={ownerLength} maxLength={MAX_LENGTH} />
        <Input
          ref={$input}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength={MAX_LENGTH}
          onInput={handleInputOwner}
          defaultValue={owner}
        />
      </InputBox>
    );
  }
);

CardOwner.displayName = "CardOwner";

export default CardOwner;
