import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NextButton from "@components/button/NextButton";
import BackButton from "@components/button/BackButton";

export default {
  title: "Components/Button",
};

const NextButtonTemplate: ComponentStory<typeof NextButton> = (args) => (
  <NextButton {...args} />
);

export const NextButtonTemp = NextButtonTemplate.bind({});
NextButtonTemp.args = {
  onClick: () => {
    console.log("Click Next Button");
  },
};

const BackButtonTemplate: ComponentStory<typeof BackButton> = (args) => (
  <BackButton {...args} />
);
export const BackButtonTemp = BackButtonTemplate.bind({});
BackButtonTemp.args = {
  onClick: () => {
    console.log("Click Back Button");
  },
};
