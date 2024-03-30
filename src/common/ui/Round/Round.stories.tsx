import { Meta, StoryObj } from "@storybook/react";
import Round, { RoundProps } from "./Round";

const meta: Meta<typeof Round> = {
	component: Round,
	title: "Common/Round"
};

export default meta;

type Story = StoryObj<RoundProps>;

export const RoundStory: Story = {
	args: {
		width: 100,
		height: 100,
		color: "#ff0000"
	},
	render: (args: RoundProps) => {
		return <Round {...args} />;
	}
};
