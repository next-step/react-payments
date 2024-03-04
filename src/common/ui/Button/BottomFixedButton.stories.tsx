import { Meta, StoryObj } from "@storybook/react";
import Text from "../Text/Text";
import BottomFixedButton from "./BottomFixedButton";
import { ButtonProps } from "./Button";

const meta: Meta<typeof BottomFixedButton> = {
	component: BottomFixedButton,
	title: "Common/BottomFixedButton"
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const BottomFixedButtonStory: Story = {
	args: {
		buttonColor: "cyan"
	},
	render: (args: ButtonProps) => {
		return (
			<BottomFixedButton {...args}>
				<Text.Span>버튼 입니다</Text.Span>
			</BottomFixedButton>
		);
	}
};
