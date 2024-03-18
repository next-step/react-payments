import { useCallback, useState } from 'react';

export default function useInput({
	validate,
	initialValue,
}: {
	validate?: (value: string) => boolean;
	initialValue?: string;
}) {
	const [value, setValue] = useState(initialValue ?? '');
	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value;
			if (validate && !validate(value)) return;
			setValue(value);
		},
		[validate],
	);
	return { value, handleChange };
}
