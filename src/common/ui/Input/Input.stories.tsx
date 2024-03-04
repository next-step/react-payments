import { useArgs } from "@storybook/client-api";
import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./Input";

const meta: Meta<typeof Input> = {
	component: Input,
	title: "Common/Input"
};

export default meta;

type Story = StoryObj<InputProps>;

const InputRender = (args: InputProps) => {
	const [input, setInput] = useArgs();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		args.value = e.target.value;
		setInput({ ...input, value: e.target.value });
	};

	return <Input {...args} onChange={onChange} />;
};

export const InputStory: Story = {
	args: {
		value: "기본 입력",
		placeholder: "입력",
		disabled: false
	},
	render: InputRender
};
