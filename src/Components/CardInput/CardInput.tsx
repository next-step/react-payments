import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
  Children,
  type ReactElement,
  type ChangeEvent,
  type KeyboardEvent,
} from 'react';
import { type CardInputOptions } from '.';
import { createComponentContext } from './useComponent';

interface ContainerProps {
  title: string;
  children:
    | Array<ReactElement<CardInputOptions>>
    | ReactElement<CardInputOptions>;
  onChange: (value: string[]) => void;
  onValidate: () => boolean;
  width?: string;
  background?: boolean;
  delimeter?: string;
  countMaxLength?: boolean;
}

export interface HandleContainer {
  focus: () => void;
  validate: () => boolean;
}

const [ComponentProvider, useComponentContext] = createComponentContext();

const Container = forwardRef<HandleContainer, ContainerProps>(
  function Container(props, ref) {
    const {
      title,
      children,
      onChange,
      onValidate,
      countMaxLength = false,
      delimeter = '',
      width = '100%',
      background = true,
    } = props;
    const { getAll } = useComponentContext().components;

    const [inputLength, setInputLength] = useState(0);
    const [isValid, setIsValid] = useState(true);

    const handleChange = useCallback(() => {
      onChange(
        getAll().map(
          (component) => (component.ref.current as HTMLInputElement).value
        )
      );
      setInputLength(getTotalInputLength());
      setIsValid(true);
    }, [onChange, getAll]);

    const getTotalInputLength = useCallback(() => {
      const result = getAll().reduce<number>(
        (length, component) =>
          length +
          ((component.ref.current as HTMLInputElement).value?.length ?? 0),
        0
      );
      return result;
    }, [getAll]);

    const getFirstIncompleteInput = useCallback(() => {
      const incompleteInput = getAll().find(
        (component) =>
          (component.ref.current as HTMLInputElement).value.length <
          (component.props as CardInputOptions).maxLength
      );
      return incompleteInput;
    }, [getAll]);

    const handleFocus = useCallback(() => {
      if (
        getAll().every(
          (component) =>
            (component.ref.current as HTMLInputElement).value.length === 0
        )
      ) {
        (getFirstIncompleteInput()?.ref.current as HTMLInputElement)?.focus();
      }
    }, [getAll]);

    useImperativeHandle(
      ref,
      () => {
        return {
          focus() {
            handleFocus();
          },
          validate() {
            const isValid = onValidate();
            setIsValid(isValid);
            return isValid;
          },
        };
      },
      []
    );

    return (
      <div className="input-container">
        <div className="input-top">
          <span className="input-title">{title}</span>
          {countMaxLength && (
            <span className="input-length-count">
              {inputLength} / {getTotalMaxLength(children)}
            </span>
          )}
        </div>
        <div
          className={`input-box 
                      ${background ? 'background' : ''} 
                      ${!isValid ? 'invalid' : ''}
                      `}
          style={{ width: `${width}` }}
          onChange={handleChange}
          onFocus={handleFocus}
        >
          {insertDelimeter(children, delimeter)}
        </div>
        {!isValid && <span className="invalid-text">입력을 완료해주세요</span>}
      </div>
    );
  }
);

const getTotalMaxLength = (components: ReactElement[] | ReactElement) =>
  Children.toArray(components).reduce<number>((totalLength, child) => {
    totalLength += Number(
      (child as ReactElement<CardInputOptions>).props.maxLength
    );
    return totalLength;
  }, 0);

const insertDelimeter = (
  components: ReactElement[] | ReactElement,
  delimeter: string
) =>
  Children.toArray(components).reduce<ReactElement[]>(
    (elements, child, i, array) => {
      elements.push(child as ReactElement);
      if (i < array.length - 1) {
        elements.push(
          delimeter ? (
            <span key={`${delimeter}:${i}`}>{delimeter}</span>
          ) : (
            <span key={`child:${i}`} style={{ padding: '0 5px' }}></span>
          )
        );
      }
      return elements;
    },
    []
  );

export const CardInputContainerWithProvider = forwardRef<
  HandleContainer,
  ContainerProps
>(function CardInputContainerWithProvider(props, ref) {
  return (
    <ComponentProvider>
      <Container {...props} ref={ref} />
    </ComponentProvider>
  );
});

export function Input(props: CardInputOptions) {
  const { hideValue, maxLength, placeholder, validate = undefined } = props;

  const ref = useRef<HTMLInputElement>(null);

  const { add, remove, get } = useComponentContext().components;

  useEffect(() => {
    add(ref, { ...props });
    return () => {
      remove(ref);
    };
  }, [add, remove]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (validate) {
        e.target.value = e.target.value.match(validate)?.[0] ?? '';
      }
      if (e.target.value.length >= maxLength) {
        get(ref)?.nextRef.current?.focus();
      }
    },
    [get]
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Backspace' && !(e.target as HTMLInputElement).value) {
      get(ref)?.prevRef.current?.focus();
    }
  }, []);

  return (
    <input
      ref={ref}
      className="input-basic"
      type={hideValue ? 'password' : 'text'}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder ?? ''}
      maxLength={maxLength}
    />
  );
}
