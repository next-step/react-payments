import { useCallback, useState } from 'react';

export default function useInput({
	validate,
}: {
	validate?: (value: string) => boolean;
}) {
	const [value, setValue] = useState('');
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
