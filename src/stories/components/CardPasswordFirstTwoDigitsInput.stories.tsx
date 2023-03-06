import { Story } from "@storybook/react";
import CardPasswordFirstTwoDigitsInput from "../../components/CardPasswordFirstTwoDigitsInput";

export default {
  title: "Components/CardPasswordFirstTwoDigitsInput",
  component: CardPasswordFirstTwoDigitsInput,
};

const Template: Story = (args) => <CardPasswordFirstTwoDigitsInput />;

export const Default = Template.bind({});
