import { NumberInput } from "@/components/atom/NumberInput";
import { inputProps } from "@/pages/RegisterCard/helper";
import { ChangeEvent, Fragment, useRef } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export const CardNumberInput = () => {
  const inputRef = useRef<HTMLInputElement[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.value.length === 4) {
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
              onChange={(e) => onChange(e, i)}
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
  background-color: #ecebf1;
  border-radius: 5px;
`;
