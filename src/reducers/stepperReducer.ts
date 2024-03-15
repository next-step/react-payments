export interface StepperState {
	currentStep: number;
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
	| { type: 'toAddCardComplete' };

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
			return { currentStep: 2 };
		default:
			return state;
	}
}
