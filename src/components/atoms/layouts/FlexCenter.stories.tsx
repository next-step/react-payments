import { ComponentMeta, ComponentStory } from "@storybook/react";
import FlexCenter from "./FlexCenter";

export default {
  title: "페이먼츠 미션/Components/Layouts/FlexCenter",
  component: FlexCenter,
} as ComponentMeta<typeof FlexCenter>;

const Template: ComponentStory<typeof FlexCenter> = (props) => (
  <FlexCenter {...props}>
    <div>FlexCenter</div>
  </FlexCenter>
);

export const example = Template.bind({});
example.args = {};
