import React, { CSSProperties } from "react";
import styled from "styled-components";

type TProps = {
  label: string;
  children: React.ReactNode;
  style?: CSSProperties;
};

export const FormBox = ({ label, children, style }: TProps) => {
  return (
    <Container style={style}>
      <label>{label}</label>
      <div className="children-container">{children}</div>
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

  .children-container {
    background-color: #ecebf1;
    border-radius: 5px;
  }
`;
