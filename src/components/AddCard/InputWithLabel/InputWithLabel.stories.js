import Input from "../Input";
import InputWithLabel from ".";

import { EXPIRY_DATE_LABEL } from "../constants";

export default {
  title: "Component/Input/inputGroup",
  component: InputWithLabel,
};

export const Default = (args) => (
  <>
    <InputWithLabel {...args}>
      <Input
        field={{
          id: "input",
          ariaLabel: EXPIRY_DATE_LABEL.month,
          type: "number",
          name: "monthField",
          placeholder: "MM",
          maxLength: 2,
        }}
        background
        type="single"
      />
    </InputWithLabel>
    <InputWithLabel {...args}>
      <Input
        as="p"
        field={{
          id: "input-1",
          ariaLabel: EXPIRY_DATE_LABEL.month,
          type: "number",
          name: "monthField",
          placeholder: "MM",
          maxLength: 2,
        }}
        background
      />
      <Input
        as="p"
        field={{
          ariaLabel: EXPIRY_DATE_LABEL.month,
          type: "number",
          name: "monthField",
          placeholder: "MM",
          maxLength: 2,
        }}
        background
      />
    </InputWithLabel>
    <InputWithLabel {...args}>
      <Input
        as="p"
        field={{
          ariaLabel: EXPIRY_DATE_LABEL.month,
          type: "number",
          name: "monthField",
          placeholder: "MM",
          maxLength: 2,
        }}
        background
      />
      <Input
        as="p"
        field={{
          ariaLabel: EXPIRY_DATE_LABEL.month,
          type: "number",
          name: "monthField",
          placeholder: "MM",
          maxLength: 2,
        }}
        background
        isFullField={true}
      />
      <Input
        as="p"
        field={{
          ariaLabel: EXPIRY_DATE_LABEL.month,
          type: "number",
          name: "monthField",
          placeholder: "MM",
          maxLength: 2,
        }}
        background
        isFullField={true}
        separator="-"
      />
      <Input
        as="p"
        field={{
          ariaLabel: EXPIRY_DATE_LABEL.month,
          type: "number",
          name: "monthField",
          placeholder: "MM",
          maxLength: 2,
        }}
        background
        isFullField={true}
        separator="-"
      />
    </InputWithLabel>
  </>
);

Default.args = {
  label: "만료일",
};

Default.storyName = "with label";
