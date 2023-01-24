import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./Card";

export default {
  title: "페이먼츠 미션/Components/Card",
  component: Card,
  args: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (props) => (
  <div className="flex-column-center">
    <Card {...props} />
  </div>
);

export const normal = Template.bind({});
normal.args = {
  numbers: ["1234", "1234", "1234", "1234"],
  owner: "owner",
  expiredMonth: "01",
  expiredYear: "24",
  nickname: "normal nickname",
};

export const type1 = Template.bind({});
type1.args = {
  numbers: ["1111", "1111", "1234", "1234"],
  owner: "owner",
  expiredMonth: "01",
  expiredYear: "24",
  nickname: "type1 nickname",
};

export const type2 = Template.bind({});
type2.args = {
  numbers: ["2222", "2222", "1234", "1234"],
  owner: "owner",
  expiredMonth: "01",
  expiredYear: "24",
  nickname: "type2 nickname",
};

export const type3 = Template.bind({});
type3.args = {
  numbers: ["3333", "3333", "1234", "1234"],
  owner: "owner",
  expiredMonth: "01",
  expiredYear: "24",
  nickname: "type3 nickname",
};

export const type4 = Template.bind({});
type4.args = {
  numbers: ["4444", "4444", "1234", "1234"],
  owner: "owner",
  expiredMonth: "01",
  expiredYear: "24",
  nickname: "type4 nickname",
};
export const type5 = Template.bind({});
type5.args = {
  numbers: ["1212", "1212", "1234", "1234"],
  owner: "owner",
  expiredMonth: "01",
  expiredYear: "24",
  nickname: "type5 nickname",
};

export const type6 = Template.bind({});
type6.args = {
  numbers: ["2323", "2323", "1234", "1234"],
  owner: "owner",
  expiredMonth: "01",
  expiredYear: "24",
  nickname: "type6 nickname",
};

export const type7 = Template.bind({});
type7.args = {
  numbers: ["1313", "1313", "1234", "1234"],
  owner: "owner",
  expiredMonth: "01",
  expiredYear: "24",
  nickname: "type7 nickname",
};

export const type8 = Template.bind({});
type8.args = {
  numbers: ["1414", "1414", "1234", "1234"],
  owner: "owner",
  expiredMonth: "01",
  expiredYear: "24",
  nickname: "type8 nickname",
};
