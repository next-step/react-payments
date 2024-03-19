import { Meta, StoryObj } from "@storybook/react";
import Text from "../Text/Text";
import Button, { ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
	component: Button,
	title: "Common/Button"
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const ButtonStory: Story = {
	args: {
		buttonColor: "grey400"
	},
	render: (args: ButtonProps) => {
		return (
			<Button {...args}>
				<Text.Span>버튼 입니다</Text.Span>
			</Button>
		);
	}
};
