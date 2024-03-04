import { Meta, StoryObj } from "@storybook/react";
import IconButton, { IconButtonProps } from "./IconButton";

const meta: Meta<typeof IconButton> = {
	component: IconButton,
	title: "Common/IconButton"
};

export default meta;

type Story = StoryObj<IconButtonProps>;

export const IconButtonStory: Story = {
	args: {
		size: "l",
		name: "arrow-left"
	},
	render: (args: IconButtonProps) => {
		return <IconButton {...args} />;
	}
};
