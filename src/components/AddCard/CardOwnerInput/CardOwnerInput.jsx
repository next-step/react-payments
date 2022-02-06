import * as InputStyle from "../../style/input";

import Input from "../Input";

import CARD_OWNER_MAX_LENGTH from "./constants";

export default function CardOwnerInput({ value, onChange }) {
  return (
    <InputStyle.Container>
      <InputStyle.LabelGroup>
        <label htmlFor="card-owner">카드 소유자이름(선택)</label>
        <span>{value.length}/30</span>
      </InputStyle.LabelGroup>
      <Input
        field={{
          id: "card-owner",
          name: "cardOwner",
          value,
          maxLength: CARD_OWNER_MAX_LENGTH,
        }}
        onChange={onChange}
        background
      />
    </InputStyle.Container>
  );
}
