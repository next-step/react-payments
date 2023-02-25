import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../../components/Form/Button";

export default {
  title: "Components/Form/Button", // story 이름
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button />;

export const Basic = Template.bind({});
