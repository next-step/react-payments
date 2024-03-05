import { useRef, useState } from "react";

const useCustomForm = (props) => {
  const { defaultValues, mode } = props;

  const checkWatch = new Set();
  const [watchValue, setWatchValue] = useState(defaultValues || {});
  const refs = useRef(defaultValues || {});
  const formOption = useRef({});
  const [formState, setFormState] = useState({});

  const updateFormState = () => {
    if (mode === "onChange") {
      let isValid = true;
      Object.entries(formOption.current).forEach(([key, value]) => {
        if (value.required && !refs.current[key]) {
          isValid = false;
        }
      });
      console.log(isValid);

      setFormState({
        isValid,
      });
    }
  };

  const updateWatch = (name, value) => {
    if (!checkWatch.has(name)) return;
    setWatchValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const register = (name, option) => {
    formOption.current[name] = option;

    return {
      onChange: (e) => {
        const { value } = e.target;
        refs.current[name] = value;
        updateFormState();
        updateWatch(name, value);
      },
    };
  };

  const getValues = (name) => {
    if (!name) {
      return refs.current;
    }
    return refs.current[name];
  };

  const setValue = (name, value) => {
    refs.current[name] = value;
    updateFormState();
    updateWatch(name, value);
  };

  const watch = (name) => {
    if (name) {
      checkWatch.add(name);
      return watchValue[name];
    } else {
      Object.keys(refs.current).forEach((key) => {
        checkWatch.add(key);
      });

      return watchValue;
    }
  };

  const reset = () => {
    refs.current = defaultValues;
    setWatchValue(defaultValues);
  };

  const handleSubmit = (callback) => () => {
    return callback(refs.current);
  };

  return {
    formState,
    register,
    getValues,
    setValue,
    watch,
    reset,
    handleSubmit,
  };
};

export default useCustomForm;
