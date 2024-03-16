import { NumberInput } from "@/components/atom/NumberInput";
import { ComponentProps, Fragment, useRef } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const commonProps: ComponentProps<typeof NumberInput> = {
  variant: "borderLess",
  maxLength: 4,
  style: { textAlign: "center" },
};

export const inputProps: ComponentProps<typeof NumberInput>[] = [
  {
    ...commonProps,
  },
  {
    ...commonProps,
  },
  {
    ...commonProps,
    mask: true,
  },
  {
    ...commonProps,
    mask: true,
  },
];

export const CardNumberInput = () => {
  const inputRef = useRef<HTMLInputElement[]>([]);

  const onChange = (value: string, index: number) => {
    if (value.length === 4) {
      inputRef.current[index + 1].focus();
    }
  };
  return (
    <Container>
      {inputProps.map((prop, i) => {
        return (
          <Fragment key={uuidv4()}>
            <NumberInput
              {...prop}
              ref={(elem) => {
                elem && (inputRef.current[i] = elem);
              }}
              {...(i !== inputProps.length - 1 && {
                onChange: (value: string) => onChange(value, i),
              })}
            />
            {i !== inputProps.length - 1 && <span>-</span>}
          </Fragment>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
