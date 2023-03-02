import {
    ChangeEvent,
    Dispatch,
    InputHTMLAttributes,
    SetStateAction,
    useEffect,
    useState,
} from 'react';

function handleInputChange(setValue: Dispatch<SetStateAction<string>>) {
    return (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setValue(event.target.value);
    };
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    onChange: <T>(value: T) => void;
    placeholder?: string;
    dirtyState?: boolean;
    value?: string;
}

export default function TextInput({
    onChange,
    placeholder = '',
    value: propValue = '',
}: Props) {
    const [value, setValue] = useState(propValue);
    const inputProps = {
        value,
        placeholder,
    };

    useEffect(() => {
        onChange(value);
    }, [value, onChange]);

    return <input {...inputProps} onChange={handleInputChange(setValue)} />;
}
