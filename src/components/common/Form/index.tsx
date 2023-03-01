import React, { forwardRef } from 'react';

import { useFormContext } from './FormContext';

export type FormProps = Pick<
    React.FormHTMLAttributes<HTMLFormElement>,
    Exclude<
        keyof React.FormHTMLAttributes<HTMLFormElement>,
        'onReset' | 'onSubmit'
    >
>;

export const Form = forwardRef<
    HTMLFormElement,
    React.ComponentPropsWithoutRef<'form'>
>((props: FormProps, ref) => {
    const { action, ...rest } = props;
    const _action = action ?? '#';
    const { handleReset, handleSubmit } = useFormContext();
    return (
        <form
            onSubmit={handleSubmit}
            ref={ref}
            onReset={handleReset}
            action={_action}
            {...rest}
        />
    );
});

Form.displayName = 'Form';
