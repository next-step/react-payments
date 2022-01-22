import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NextBtn from "@components/button/NextBtn";
import BackBtn from "@components/button/BackBtn";
import AddCardBtn from "@components/button/AddCardBtn";

export default {
  title: "Components/Button",
};

const NextButtonTemplate: ComponentStory<typeof NextBtn> = (args) => (
  <NextBtn {...args} />
);

export const NextButtonTemp = NextButtonTemplate.bind({});
NextButtonTemp.args = {
  onClick: () => {
    console.log("Click Next Button");
  },
};

const BackButtonTemplate: ComponentStory<typeof BackBtn> = (args) => (
  <BackBtn {...args} />
);
export const BackButtonTemp = BackButtonTemplate.bind({});
BackButtonTemp.args = {
  onClick: () => {
    console.log("Click Back Button");
  },
};

const AddCardButtonTemplate: ComponentStory<typeof AddCardBtn> = (args) => (
  <AddCardBtn {...args} />
);

export const AddCardButtonTemp = AddCardButtonTemplate.bind({});
AddCardButtonTemp.args = {
  onClick: () => {
    console.log("Click Add Card Button");
  },
};
