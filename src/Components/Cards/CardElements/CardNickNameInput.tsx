import { forwardRef, MutableRefObject } from "react";

const CardNickNameInput = forwardRef<
  HTMLInputElement,
  { ref: MutableRefObject<{ value: HTMLInputElement }> }
>((props, ref) => {
  return (
    <div className="input-container flex-center w-100">
      <input
        ref={ref}
        className="input-underline w-75"
        type="text"
        placeholder="카드의 별칭을 입력해주세요."
      />
    </div>
  );
});

export default CardNickNameInput;
