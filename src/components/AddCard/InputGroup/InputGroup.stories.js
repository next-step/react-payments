import InputGroup from ".";

import * as InputStyle from "../../style/input";

import { Basic as BasicInput } from "../Input/Input.stories";

export default {
  title: "Component/Input",
  component: InputGroup,
};

export const withLabel = () => (
  <>
    <InputStyle.Container>
      <InputStyle.Label htmlFor="single-input">single</InputStyle.Label>
      <BasicInput
        field={{
          id: "single-input",
          ref: null,
          type: "password",
          name: "monthField",
          placeholder: "MM",
        }}
        background
      />
    </InputStyle.Container>
    <InputStyle.Container>
      <InputStyle.LabelGroup htmlFor="length">
        length<span>0/30</span>
      </InputStyle.LabelGroup>
      <BasicInput
        field={{
          id: "length",
          ref: null,
          type: "password",
          name: "monthField",
          placeholder: "MM",
        }}
        background
      />
    </InputStyle.Container>
  </>
);
