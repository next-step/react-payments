import { Meta, StoryObj } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

const meta: Meta<typeof Header> = {
	component: Header,
	title: "Common/Header"
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const HeaderStory: Story = {
	args: {
		showBackButton: true,
		title: "Title"
	},
	render: (args: HeaderProps) => {
		return <Header {...args} />;
	}
};
