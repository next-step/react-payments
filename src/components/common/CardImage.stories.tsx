import type { Meta, StoryObj } from '@storybook/react';

import CardImageComponent from 'src/components/common/CardImage';
import { CardInfo } from 'src/machines/addCardMachine';
import { CARD_COMPANY_LIST } from 'src/constants/card';

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
			options: ['', ...CARD_COMPANY_LIST.map(({ code }) => code)],
			control: {
				type: 'select',
				labels: {
					'': '선택 안함',
					...CARD_COMPANY_LIST.reduce(
						(acc, cur) => {
							acc[cur.code] = cur.name;
							return acc;
						},
						{} as Record<string, string>,
					),
				},
			},
		},
	},
};
