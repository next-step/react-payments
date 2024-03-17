import { Meta, StoryObj } from '@storybook/react';
import { FaChevronLeft } from 'react-icons/fa';
import { Button } from '@components/ui-kit';

const meta = {
	title: 'COMMON/UI-KIT/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		children: '확인',
	},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const WithString: Story = {
	args: {
		children: '확인',
	},
};

export const WithReactNode: Story = {
	args: {
		children: (
			<Button>
				<FaChevronLeft size={20} />
			</Button>
		),
	},
};

export default meta;
