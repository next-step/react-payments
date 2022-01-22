import { Story } from "@storybook/react";
import { CardFormField } from "../../@types";

import CardForm, { Props } from "./CardForm";

export default {
  title: "Components/CardForm",
  component: CardForm,
};

const Template: Story<Props> = (args) => <CardForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (formField: CardFormField) => console.log(formField),
};
