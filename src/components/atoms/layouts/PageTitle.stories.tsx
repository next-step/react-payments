import { ComponentMeta, ComponentStory } from "@storybook/react";
import PageTitle from "./PageTitle";

export default {
  title: "페이먼츠 미션/Components/Layouts/PageTitle",
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (props) => (
  <PageTitle {...props}>
    <div>PageTitle</div>
  </PageTitle>
);

export const example = Template.bind({});
example.args = {};
