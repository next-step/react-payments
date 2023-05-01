import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 16px 0;
`;

const InputStyle = `
  background-color: #ecebf1;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border-radius: 0.25rem;
`;

export const InputTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

export const InputBasic = styled.input`
  ${InputStyle};
  height: 45px;
  width: 100%;
  text-align: center;
  border: none;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  ${InputStyle};
`;

const HelpStyle = `
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  color: #525252;
`;

export const HelpIcon = styled.span`
  ${HelpStyle};
  margin-left: 4px;
  height: 16px;
  width: 16px;
  color: #b0b0b0;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

export const HelpDescription = styled.span`
  ${HelpStyle};
  display: block;
  margin-top: 4px;
`;
