import { PaymentCardType } from '@types';

export interface StepperState {
	currentStep: number;
	data?: PaymentCardType;
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
	| { type: 'toEditCardAlias'; payload: PaymentCardType };

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
		case 'toEditCardAlias':
			return { currentStep: 2, data: action.payload };
		default:
			return state;
	}
}
