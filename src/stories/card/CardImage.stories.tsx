import type { Meta, StoryObj } from '@storybook/react';

import CardImageComponent from 'src/components/CardImage.tsx';
import { CardInfo } from 'src/state/addCardMachine.ts';
import { CARD_COMPANY_LIST } from 'src/constants/card.ts';

type CardImageStoryComponentProps = Pick<
	CardInfo,
	| 'cardNumberFirstSegment'
	| 'cardNumberSecondSegment'
	| 'cardNumberThirdSegment'
	| 'cardNumberFourthSegment'
	| 'cardOwnerName'
	| 'cardExpirationDate'
	| 'cardCompanyCode'
>;

const meta: Meta<CardImageStoryComponentProps> = {
	title: 'card/CardImage',
	component: CardImageComponent,
	render: ({
		cardNumberFirstSegment,
		cardNumberSecondSegment,
		cardNumberThirdSegment,
		cardNumberFourthSegment,
		cardOwnerName,
		cardExpirationDate,
		cardCompanyCode,
	}) => {
		return (
			<CardImageComponent
				cardNumberFirstSegment={cardNumberFirstSegment}
				cardNumberSecondSegment={cardNumberSecondSegment}
				cardNumberThirdSegment={cardNumberThirdSegment}
				cardNumberFourthSegment={cardNumberFourthSegment}
				cardOwnerName={cardOwnerName}
				cardExpirationDate={cardExpirationDate}
				cardCompanyCode={cardCompanyCode}
			/>
		);
	},
};

export default meta;

type Story = StoryObj<typeof CardImageComponent>;

export const CardImage: Story = {
	args: {
		cardNumberFirstSegment: '',
		cardNumberSecondSegment: '',
		cardNumberThirdSegment: '',
		cardNumberFourthSegment: '',
		cardOwnerName: '',
		cardExpirationDate: '',
		cardCompanyCode: '',
	},
	argTypes: {
		cardNumberFirstSegment: {
			control: {
				type: 'text',
			},
		},
		cardNumberSecondSegment: {
			control: {
				type: 'text',
			},
		},
		cardNumberThirdSegment: {
			control: {
				type: 'text',
			},
		},
		cardNumberFourthSegment: {
			control: {
				type: 'text',
			},
		},
		cardExpirationDate: {
			control: {
				type: 'text',
			},
		},
		cardOwnerName: {
			control: {
				type: 'text',
			},
		},
		cardCompanyCode: {
			control: {
				type: 'select',
				options: CARD_COMPANY_LIST.map(cardCompany => cardCompany.code),
			},
		},
	},
};
