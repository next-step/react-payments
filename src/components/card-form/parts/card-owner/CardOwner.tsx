import { ForwardedRef, forwardRef } from "react";
import { Input, InputBox } from "../../../atoms";
import { useCardOwner } from "./hooks";
import CardOwnerLength from "./CardOwnerLength";

const MAX_LENGTH = 30;

const CardOwner = forwardRef((_, ref: ForwardedRef<HTMLInputElement>) => {
  const { owner, ownerLength, handleInputOwner } = useCardOwner();

  return (
    <InputBox className="relative">
      <CardOwnerLength ownerLength={ownerLength} maxLength={MAX_LENGTH} />
      <Input
        ref={ref}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={MAX_LENGTH}
        onInput={handleInputOwner}
        defaultValue={owner}
        required
      />
    </InputBox>
  );
});

CardOwner.displayName = "CardOwner";

export default CardOwner;
