import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CardImageComponent from 'src/components/CardImage.tsx';
import { SelectToFormLayer } from 'src/components/SelectToFormLayer.tsx';
import { CardInfo } from 'src/state/addCardMachine.ts';
import { useAddCardMachineActorRef } from 'src/state/addCardMachine.ts';
import { AddCardMachineDecorator } from 'src/stories/Decorators.tsx';

type CardImageStoryComponentProps = Pick<
	CardInfo,
	| 'cardNumberFirstSegment'
	| 'cardNumberSecondSegment'
	| 'cardNumberThirdSegment'
	| 'cardNumberFourthSegment'
	| 'cardOwnerName'
	| 'cardExpirationDate'
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
	}) => {
		const addCardMachineActorRef = useAddCardMachineActorRef();

		useEffect(() => {
			addCardMachineActorRef.send({
				type: 'CHANGE_FIELD',
				value: cardNumberFirstSegment,
				field: 'cardNumberFirstSegment',
			});
		}, [addCardMachineActorRef, cardNumberFirstSegment]);

		useEffect(() => {
			addCardMachineActorRef.send({
				type: 'CHANGE_FIELD',
				value: cardNumberSecondSegment,
				field: 'cardNumberSecondSegment',
			});
		}, [addCardMachineActorRef, cardNumberSecondSegment]);

		useEffect(() => {
			addCardMachineActorRef.send({
				type: 'CHANGE_FIELD',
				value: cardNumberThirdSegment,
				field: 'cardNumberThirdSegment',
			});
		}, [addCardMachineActorRef, cardNumberThirdSegment]);

		useEffect(() => {
			addCardMachineActorRef.send({
				type: 'CHANGE_FIELD',
				value: cardNumberFourthSegment,
				field: 'cardNumberFourthSegment',
			});
		}, [addCardMachineActorRef, cardNumberFourthSegment]);

		useEffect(() => {
			addCardMachineActorRef.send({
				type: 'CHANGE_FIELD',
				value: cardOwnerName,
				field: 'cardOwnerName',
			});
		}, [addCardMachineActorRef, cardOwnerName]);

		useEffect(() => {
			addCardMachineActorRef.send({
				type: 'CHANGE_FIELD',
				value: cardExpirationDate,
				field: 'cardExpirationDate',
			});
		}, [addCardMachineActorRef, cardExpirationDate]);

		return (
			<SelectToFormLayer>
				<CardImageComponent />
			</SelectToFormLayer>
		);
	},
	decorators: [AddCardMachineDecorator],
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
	},
};
