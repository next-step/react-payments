import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@components/ui-kit';
import { SlQuestion } from 'react-icons/sl';
import { useInput, useDisplayedInput } from '@hooks';

const meta = {
	title: 'UI-KIT/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

const TestBasicInput = () => {
	const { value, handleChange } = useInput({});
	return <Input variant="basic" value={value} onChange={handleChange} />;
};
export const Basic: Story = {
	render: () => <TestBasicInput />,
};

const TestBasicInputDisplayedToUpperCase = () => {
	const toUpperCase = (value: string) => value.toUpperCase();
	const { displayedValue, handleChange } = useDisplayedInput({
		toDisplayed: toUpperCase,
	});
	return (
		<Input variant="basic" value={displayedValue} onChange={handleChange} />
	);
};
export const BasicDisplayedToUpperCase: Story = {
	render: () => <TestBasicInputDisplayedToUpperCase />,
};

const TestUnderlineInput = () => {
	const { value, handleChange } = useInput({});
	return <Input variant="underline" value={value} onChange={handleChange} />;
};
export const Underline: Story = {
	render: () => <TestUnderlineInput />,
};

const TestEmptyInput = () => {
	const { value, handleChange } = useInput({});
	return <Input variant="empty" value={value} onChange={handleChange} />;
};
export const Empty: Story = {
	render: () => <TestEmptyInput />,
};

const TestBasicInputWithReactNode = () => {
	const { value, handleChange } = useInput({});
	return (
		<Input value={value} variant="basic" onChange={handleChange}>
			<SlQuestion size={28} />
		</Input>
	);
};
export const BasicWithReactNode: Story = {
	render: () => <TestBasicInputWithReactNode />,
};

export default meta;
