import { PaymentCard } from '@pages/addCardComplete/AddCardCompletePage';

export interface StepperState {
	currentStep: number;
	data?: PaymentCard;
}

export const initialState: StepperState = {
	currentStep: 0,
};

export type Action =
	| {
			type: 'toCards';
	  }
	| {
			type: 'toAddCard';
	  }
	| { type: 'toAddCardComplete'; payload: PaymentCard };

export function stepperReducer(state: StepperState, action: Action) {
	switch (action.type) {
		case 'toCards':
			return {
				currentStep: 0,
			};
		case 'toAddCard':
			return {
				currentStep: 1,
			};
		case 'toAddCardComplete':
			return { currentStep: 2, data: action.payload };
		default:
			return state;
	}
}
