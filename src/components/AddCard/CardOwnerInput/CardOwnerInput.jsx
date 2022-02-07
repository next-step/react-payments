import * as InputStyle from "../../style/input";

import Input from "../Input";

export default function CardOwnerInput({ value, onChange }) {
  const MAX_LENGTH = 30;

  return (
    <InputStyle.Container>
      <InputStyle.LabelGroup>
        <label htmlFor="card-owner">카드 소유자이름(선택)</label>
        <span>{value.length}/30</span>
      </InputStyle.LabelGroup>
      <Input
        id="card-owner"
        name="cardOwner"
        value={value}
        maxLength={MAX_LENGTH}
        onChange={onChange}
        background
      />
    </InputStyle.Container>
  );
}
