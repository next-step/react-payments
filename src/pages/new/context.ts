import { createContext } from 'react';
import type { Dispatch } from 'react';

type FormContext = {
  totalFormData: Map<string, any>;
  setTotalFormData: Dispatch<React.SetStateAction<Map<string, unknown>>>;
};

const FormContext = createContext<FormContext>({
  totalFormData: new Map(),
  setTotalFormData: () => {},
});

export default FormContext;
