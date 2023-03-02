import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 16px 0;
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
  background-color: #ecebf1;
  height: 45px;
  width: 25%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

export const HelpIcon = styled.span`
  display: inline-block;
  margin-left: 4px;
  height: 16px;
  width: 16px;
  color: #b0b0b0;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

export const HelpDescription = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  line-height: 14px;
  color: #525252;
`;
