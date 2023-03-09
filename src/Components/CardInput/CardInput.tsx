import React, {
  Children,
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  type ChangeEvent,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { type CardInputOptions } from '.';
import { createComponentContext } from './useComponent';

interface ContainerProps {
  title: string;
  children:
    | Array<ReactElement<CardInputOptions>>
    | ReactElement<CardInputOptions>;
  onChange: (value: string[]) => void;
  onValidate: (value: string) => boolean;
  width?: string;
  background?: boolean;
  delimeter?: string;
  countMaxLength?: boolean;
}

interface ContainerProviderProps extends ContainerProps {
  ref: React.RefObject<HandleContainer>;
}

export interface HandleContainer {
  focus: () => void;
  validate: (s: string) => void;
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

    const handleChange = useCallback(() => {
      onChange(
        getAll().map(
          (component) => (component.ref.current as HTMLInputElement).value
        )
      );
      setInputLength(getTotalInputLength());
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

    const handleFocus = () => {
      (getFirstIncompleteInput()?.ref.current as HTMLInputElement)?.focus();
    };

    useImperativeHandle(
      ref,
      () => {
        return {
          focus() {
            handleFocus();
          },
          validate(value: string) {
            onValidate(value);
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
          className={`input-box ${background ? 'background' : ''}`}
          style={{ width: `${width}` }}
          onChange={handleChange}
          onFocus={handleFocus}
        >
          {insertDelimeter(children, delimeter)}
        </div>
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

export function CardInputContainerWithProvider(props: ContainerProviderProps) {
  return (
    <ComponentProvider>
      <Container {...props} />
    </ComponentProvider>
  );
}

export function Input(props: CardInputOptions) {
  const { hideValue, maxLength, placeholder, validate = undefined } = props;

  const ref = useRef<HTMLInputElement>(null);

  const { add, remove, get } = useComponentContext().components;

  useEffect(() => {
    add(ref, { ...props });
    return () => {
      remove(ref);
    };
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (validate) {
      e.target.value = e.target.value.match(validate)?.[0] ?? '';
    }
    if (e.target.value.length >= maxLength) {
      get(ref)?.nextRef.current?.focus();
    }
  }, []);

  return (
    <input
      ref={ref}
      className="input-basic"
      type={hideValue ? 'password' : 'text'}
      onChange={handleChange}
      placeholder={placeholder ?? ''}
      maxLength={maxLength}
    />
  );
}
