import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { Input, InputBox } from "../atoms";
import { useCardOwner } from "./hooks";
import CardOwnerLength from "./CardOwnerLength";
import { useCardFormContext } from "./providers";

const MAX_LENGTH = 30;

const CardOwner = forwardRef((_, ref: ForwardedRef<HTMLInputElement>) => {
  const $input = useRef<HTMLInputElement>(null);
  const { owner, ownerLength, handleInputOwner } = useCardOwner();
  const { changeCardState } = useCardFormContext();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  useImperativeHandle(ref, () => $input.current!);

  useEffect(() => {
    changeCardState({ owner });
  }, [changeCardState, owner]);

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
});

CardOwner.displayName = "CardOwner";

export default CardOwner;
