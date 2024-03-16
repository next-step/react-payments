import { CSSProperties, useState } from "react";
import styled from "styled-components";

type TProps = {
  label: string;
  style?: CSSProperties;
  render: (value: string, handleChange: (value: string) => void) => JSX.Element;
  maxLength?: number;
};

export const FormBox = ({ label, style, render, maxLength }: TProps) => {
  const [value, setValue] = useState("");

  const handleChange = (inputValue: string) => {
    setValue(inputValue);
  };
  return (
    <Container style={style}>
      <div className="label-container">
        <label>{label}</label>
        {maxLength && <label>{`${value.length} / ${maxLength}`}</label>}
      </div>
      <div className="render-container" style={style}>
        {render(value, handleChange)}
      </div>
    </Container>
  );
};

const Container = styled.div`
  label {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 4px;
    color: #525252;
  }

  .label-container {
    display: flex;
    justify-content: space-between;
  }

  .render-container {
    background-color: #ecebf1;
    border-radius: 5px;
  }
`;
