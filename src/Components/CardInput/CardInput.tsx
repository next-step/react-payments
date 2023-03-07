import React, {
  Children,
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  type ChangeEvent,
  useState,
} from 'react';
import { type CardInputOptions } from '.';
import { createComponentContext } from './useComponent';

interface ContainerProps {
  title: string;
  children:
    | Array<ReactElement<CardInputOptions>>
    | ReactElement<CardInputOptions>;
  onChange: (value: string) => void;
  validate: (value: string) => boolean;
  width?: string;
  background?: boolean;
  required?: boolean;
  delimeter?: string;
  countMaxLength?: boolean;
}

const [ComponentProvider, useComponentContext] = createComponentContext();

function Container({
  title,
  children,
  onChange,
  required = true,
  countMaxLength = false,
  delimeter = '',
  width = '100%',
  background = true,
}: ContainerProps) {
  const { getAll } = useComponentContext().components;

  const [inputLength, setInputLength] = useState(0);

  const handleChange = useCallback(() => {
    onChange(
      getAll().reduce<string>(
        (acc, component) =>
          acc + (component.ref.current as HTMLInputElement).value,
        ''
      )
    );
    setInputLength(getTotalInputLength());
  }, [onChange]);

  const getTotalInputLength = useCallback(() => {
    const result = getAll().reduce<number>(
      (length, component) =>
        length +
        ((component.ref.current as HTMLInputElement).value?.length ?? 0),
      0
    );
    return result;
  }, [getAll]);

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
      >
        {insertDelimeter(children, delimeter)}
      </div>
    </div>
  );
}

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
            <span key={i}>{delimeter}</span>
          ) : (
            <span style={{ padding: '0 5px' }}></span>
          )
        );
      }
      return elements;
    },
    []
  );

export function CardInputContainerWithProvider(props: ContainerProps) {
  return (
    <ComponentProvider>
      <Container {...props} />
    </ComponentProvider>
  );
}

export function Input({
  hideValue,
  maxLength,
  placeholder,
  validate = undefined,
}: CardInputOptions) {
  const ref = useRef<HTMLInputElement>(null);

  const { add, remove, get } = useComponentContext().components;

  useEffect(() => {
    add(ref);
    return () => {
      remove(ref);
    };
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (validate) {
      // console.log(e.target.value.match(validate)?.[0] ?? '');
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
