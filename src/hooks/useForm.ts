import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useCallback,
  useMemo,
  useReducer,
} from "react";

export const useForm = () => {
  const formData = useMemo((): FieldValues => ({}), []);

  const handleSubmit = (
    onValid?: OnValidFormData,
    onInvalid?: OnInvalidFromData
  ) => {
    return {
      onSubmit: (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Valid", formData);
        onValid?.({ ...formData });
      },
      onInvalid: (e: FormEvent<HTMLFormElement>) => {
        console.error("Invalid", formData);
        onInvalid?.("Error");
      },
    };
  };

  const forceUpdate = useReducer(() => ({}), {})[1] as () => void;

  const watchingNameSet = useMemo(() => new Set<string>(), []);

  const watch: UseFormWatch = useCallback((name?: string) => {
    if (name) {
      watchingNameSet.add(name);
    }
    return formData;
  }, []);

  const onWatchList = useMemo<Function[]>(() => [], []);

  const addOnWatchEvent = useCallback((action: Function) => {
    onWatchList.push(action);
  }, []);

  const register: UseFormRegister = useCallback(
    (
      name: string,
      registerOptions?: RegisterOptions
    ): UseFormRegisterReturn => {
      const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        formData[target.name] = target.value;
        const isWatching = watchingNameSet.has(target.name);
        if (isWatching) {
          onWatchList.forEach((action) => {
            console.log(action);
            action?.();
          });
          forceUpdate();
        }
        console.log(
          `onChanged...name: ${target.name}, isWatching: ${isWatching}, value: ${target.value}`
        );
      };

      const { invalidMessage, ...options } = registerOptions ?? {};

      const setCustomValidity = (inputRef: HTMLInputElement) => {
        if (invalidMessage) {
          inputRef.addEventListener("invalid", () => {
            inputRef.setCustomValidity("");
            if (!inputRef.validity.valid) {
              inputRef.setCustomValidity(invalidMessage);
            }
          });
        }
      };

      return {
        ...options,
        onChange,
        name,
        ref: (instance) => {
          const inputRef = instance as HTMLInputElement;
          if (inputRef) {
            formData[name] = inputRef?.value;
            setCustomValidity(inputRef);
          }
        },
      };
    },
    []
  );

  return { handleSubmit, register, watch, addOnWatchEvent };
};

type OnValidFormData = (data: FieldValues) => void;
type OnInvalidFromData = (error: string) => void;

export type FieldValues = Record<string, any>;

export type UseFormWatch = (name?: string) => FieldValues;

export type UseFormRegister = (
  name: string,
  options?: RegisterOptions
) => UseFormRegisterReturn;

export type RefCallBack = (instance: any) => void;

export type RegisterOptions = {
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
  invalidMessage?: string;
};

export type UseFormRegisterReturn = {
  onChange: ChangeEventHandler;
  ref: RefCallBack;
  name: string;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
};
