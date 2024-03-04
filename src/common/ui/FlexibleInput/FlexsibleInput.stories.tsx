import { useArgs } from "@storybook/client-api";
import { Meta, StoryObj } from "@storybook/react";
import { Width, widthVariable } from "../../utils";
import FlexibleInput from "./FlexibleInput";
import { InputProps } from "./core/Input";

const meta: Meta<typeof FlexibleInput> = {
	component: FlexibleInput,
	title: "Common/FlexibleInput"
};

export default meta;

interface StoryArgs {
	title: string;
	input: InputProps;
	width?: Width;
}

type Story = StoryObj<StoryArgs>;

const DefaultRender = (args: StoryArgs) => {
	const [input, setInput] = useArgs();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		args.input.value = e.target.value;
		setInput({ ...input, inputValue: e.target.value });
	};
	return (
		<FlexibleInput width={args.width}>
			<FlexibleInput.Title>{args.title}</FlexibleInput.Title>
			<FlexibleInput.InputBox>
				<FlexibleInput.Input
					value={args.input.value}
					onChange={onChange}
					maxLength={args.input.maxLength ?? 0}
				/>
			</FlexibleInput.InputBox>
		</FlexibleInput>
	);
};

export const Default: Story = {
	args: {
		title: "Default",
		width: 100,
		input: {
			value: "",
			placeholder: "Default",
			maxLength: 10,
			width: 100,
			textAlign: "center"
		}
	},
	argTypes: {
		width: {
			control: "select",
			options: widthVariable
		}
	},
	render: DefaultRender
};

const WithCountRender = (args: StoryArgs) => {
	const [input, setInput] = useArgs();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		args.input.value = e.target.value;
		setInput({ ...input, inputValue: e.target.value });
	};
	return (
		<FlexibleInput>
			<FlexibleInput.Title>{args.title}</FlexibleInput.Title>
			<FlexibleInput.Count />
			<FlexibleInput.InputBox>
				<FlexibleInput.Input
					value={args.input.value}
					onChange={onChange}
					maxLength={10}
				/>
			</FlexibleInput.InputBox>
		</FlexibleInput>
	);
};

export const WithCount: Story = {
	render: WithCountRender,
	args: {
		title: "With Count",
		width: 100,
		input: {
			value: "",
			placeholder: "Default",
			maxLength: 10,
			width: 100,
			textAlign: "center"
		}
	},
	argTypes: {
		width: {
			control: "select",
			options: widthVariable
		}
	}
};

interface ManyInputStoryArgs {
	title: string;
	firstInput: InputProps;
	secondInput: InputProps;
	thirdInput: InputProps;
	width?: Width;
}

type ManyInputStory = StoryObj<ManyInputStoryArgs>;

const ManyInputsRender = (args: ManyInputStoryArgs) => {
	const [firstInput, setFirstInput] = useArgs();
	const [secondInput, setSecondInput] = useArgs();
	const [thirdInput, setThirdInput] = useArgs();

	const onChangeFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
		args.firstInput.value = e.target.value;
		setFirstInput({ ...firstInput, inputValue: e.target.value });
	};

	const onChangeSecond = (e: React.ChangeEvent<HTMLInputElement>) => {
		args.secondInput.value = e.target.value;
		setSecondInput({ ...secondInput, inputValue: e.target.value });
	};

	const onChangeThird = (e: React.ChangeEvent<HTMLInputElement>) => {
		args.thirdInput.value = e.target.value;
		setThirdInput({ ...thirdInput, inputValue: e.target.value });
	};

	return (
		<FlexibleInput>
			<FlexibleInput.Title>{args.title}</FlexibleInput.Title>
			<FlexibleInput.Count />
			<FlexibleInput.InputBox>
				<FlexibleInput.Input
					autoFocus
					value={args.firstInput.value}
					onChange={onChangeFirst}
					maxLength={args.firstInput.maxLength ?? 0}
				/>
				{!!args.firstInput.value && (
					<FlexibleInput.Separator>+</FlexibleInput.Separator>
				)}
				<FlexibleInput.Input
					value={args.secondInput.value}
					onChange={onChangeSecond}
					maxLength={args.secondInput.maxLength ?? 0}
				/>
				{!!args.secondInput.value && (
					<FlexibleInput.Separator>+</FlexibleInput.Separator>
				)}
				<FlexibleInput.Input
					value={args.thirdInput.value}
					onChange={onChangeThird}
					maxLength={args.thirdInput.maxLength ?? 0}
				/>
			</FlexibleInput.InputBox>
		</FlexibleInput>
	);
};

export const ManyInputs: ManyInputStory = {
	args: {
		title: "Many Inputs",
		width: 100,
		firstInput: {
			value: "",
			onChange: () => {},
			maxLength: 4,
			width: 100,
			textAlign: "center"
		},
		secondInput: {
			value: "",
			onChange: () => {},
			maxLength: 4,
			width: 100,
			textAlign: "center"
		},
		thirdInput: {
			value: "",
			onChange: () => {},
			maxLength: 4,
			width: 100,
			textAlign: "center"
		}
	},
	argTypes: {
		width: {
			control: "select",
			options: widthVariable
		}
	},
	render: ManyInputsRender
};
