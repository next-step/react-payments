import type { Meta, StoryObj } from '@storybook/react';

import CardImageComponent from 'src/components/CardImage.tsx';

const meta: Meta<typeof CardImageComponent> = {
	title: 'card/CardImage',
	component: CardImageComponent,
};

export default meta;

type Story = StoryObj<typeof CardImageComponent>;

export const CardImage: Story = {
	args: {
		firstSegment: '',
		secondSegment: '',
		thirdSegment: '',
		fourthSegment: '',
		expirationDate: '',
		cardOwnerName: '',
	},
	argTypes: {
		firstSegment: {
			control: {
				type: 'text',
			},
		},
		secondSegment: {
			control: {
				type: 'text',
			},
		},
		thirdSegment: {
			control: {
				type: 'text',
			},
		},
		fourthSegment: {
			control: {
				type: 'text',
			},
		},
		expirationDate: {
			control: {
				type: 'text',
			},
		},
		cardOwnerName: {
			control: {
				type: 'text',
			},
		},
	},
};
