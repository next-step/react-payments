import { forwardRef } from 'react';
import FormItem from './form-item';

import type { HTMLProps } from 'react';

interface FormProps extends HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
}
const FormElement = forwardRef(
  (props: FormProps, ref: React.Ref<HTMLFormElement>) => {
    const { children, ...rest } = props;
    return (
      <form ref={ref} {...rest}>
        {children}
      </form>
    );
  }
);

const Form = Object.assign(FormElement, {
  Item: FormItem,
});
export default Form;
