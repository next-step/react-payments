import { useArgs } from "@storybook/client-api";
import { Meta, StoryObj } from "@storybook/react";
import BottomSheet, { BottomSheetProps } from "./BottomSheet";

const meta: Meta<typeof BottomSheet> = {
	component: BottomSheet,
	title: "Common/BottomSheet"
};

export default meta;

type Story = StoryObj<BottomSheetProps>;

const DefaultRender = (args: BottomSheetProps) => {
	const [bottomSheetArgs, setBottomSheetArgs] = useArgs();

	const onClose = () => {
		args.isOpen = false;
		setBottomSheetArgs({ ...bottomSheetArgs, isOpen: false });
	};

	return (
		<BottomSheet {...args} onClose={onClose}>
			<div>Content</div>
		</BottomSheet>
	);
};

export const BottomSheetStory: Story = {
	args: {
		isOpen: true
	},
	render: DefaultRender
};
