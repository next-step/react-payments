import { useStepper } from '@contexts/StepperContext';
import { useInput } from '@hooks';

export default function useAddCardAliasForm() {
	const { value: cardAlias, handleChange: handleCardAliasChange } = useInput(
		{},
	);
	const { dispatch } = useStepper();
	const handleSubmit = () => {
		dispatch({ type: 'toCards' });
	};

	return { cardAlias, handleCardAliasChange, handleSubmit };
}
