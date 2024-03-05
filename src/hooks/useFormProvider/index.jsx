import { createContext, useContext } from "react";
import propTypes from "prop-types";

const FormContext = createContext({});

const FormProvider = ({ children, ...props }) => {
  return (
    <FormContext.Provider value={{ ...props }}>{children}</FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: propTypes.node,
};

export const useFormContext = () => {
  const { register, getValues, setValue, watch, reset, handleSubmit } =
    useContext(FormContext);

  return { register, getValues, setValue, watch, reset, handleSubmit };
};

export default FormProvider;
