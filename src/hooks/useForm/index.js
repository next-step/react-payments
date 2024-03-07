import { useRef, useState } from "react";

const useCustomForm = (props = {}) => {
  const { defaultValues = {}, mode } = props;

  const elementRefs = useRef({});
  const valueRefs = useRef(defaultValues || {});
  const formOption = useRef({});

  const checkWatch = new Set();
  const [watchValue, setWatchValue] = useState(defaultValues || {});
  const [formState, setFormState] = useState({});

  const updateFormState = () => {
    if (mode === "onChange") {
      let isValid = true;
      Object.entries(formOption.current).forEach(([key, value]) => {
        if (value.required && !valueRefs.current[key]) {
          isValid = false;
        }
      });

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

  const register = (name, option, onChange = (e) => e) => {
    formOption.current[name] = option;

    return {
      ref: (el) => {
        elementRefs.current[name] = el;
      },
      onChange: (e) => {
        const { value } = onChange(e).target;
        valueRefs.current[name] = value;
        elementRefs.current[name].value = value;

        updateFormState();
        updateWatch(name, value);
      },
    };
  };

  const getValues = (name) => {
    if (!name) {
      return valueRefs.current;
    }
    return valueRefs.current[name];
  };

  const setValue = (name, value) => {
    valueRefs.current[name] = value;
    updateFormState();
    updateWatch(name, value);
  };

  const watch = (name) => {
    if (name) {
      checkWatch.add(name);
      return watchValue[name];
    } else {
      Object.keys(valueRefs.current).forEach((key) => {
        checkWatch.add(key);
      });

      return watchValue;
    }
  };

  const reset = () => {
    valueRefs.current = defaultValues;
    formOption.current = {};
    setWatchValue(defaultValues);
  };

  const handleSubmit = (callback) => () => {
    return callback(valueRefs.current);
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
