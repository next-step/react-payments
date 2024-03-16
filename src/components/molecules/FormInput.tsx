import { Input } from "@/components/atom/Input";
import { TFormInputProps } from "@/types/formInput";
import { CSSProperties } from "react";
import styled from "styled-components";

const formInputStyle: CSSProperties = {
  backgroundColor: "#ecebf1 ",
};

export const FormInput = ({ label }: TFormInputProps) => {
  return (
    <Container>
      <label>{label}</label>
      <Input variant="borderLess" style={formInputStyle} />
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
`;
