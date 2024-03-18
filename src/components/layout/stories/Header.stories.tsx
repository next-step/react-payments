import { Meta, StoryObj } from '@storybook/react';
import { Header } from '@components/layout';
import { Button } from '@components/ui-kit';
import { FaChevronLeft } from 'react-icons/fa';

const meta = {
	title: 'COMMON/LAYOUT/Header',
	component: Header,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		title: '카드 목록',
	},
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Basic: Story = {
	args: {
		title: '카드 목록',
	},
};

export const WithButton: Story = {
	args: {
		title: '카드 목록',
		children: (
			<Button>
				<FaChevronLeft size={16} />
			</Button>
		),
	},
};

export default meta;
