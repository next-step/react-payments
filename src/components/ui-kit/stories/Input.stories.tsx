import { Input } from '@components/ui-kit';
import { useDisplayedCard, useDisplayedInput } from '@hooks';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'COMMON/UI-KIT/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		width: {
			options: ['80%', '120%', '80px', '160px'],
			control: 'radio',
		},
	},
	args: {
		variant: 'basic',
	},
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
	args: {
		variant: 'basic',
	},
};

export const WithLabel: Story = {
	args: {
		variant: 'basic',
		label: <Input.Label label="카드번호" />,
	},
};

const InputWithToDisplayedCardNumber = () => {
	const { toDisplayedCardNumber } = useDisplayedCard();
	const { displayedValue, handleChange } = useDisplayedInput({
		toDisplayed: toDisplayedCardNumber,
	});
	return (
		<Input variant="basic" value={displayedValue} onChange={handleChange} />
	);
};
export const WithToDisplayedCardNumber: Story = {
	render: () => <InputWithToDisplayedCardNumber />,
};

export default meta;
