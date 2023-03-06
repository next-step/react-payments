import React from "react";
import styled from "styled-components";

const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
  color: ${(props: { disabled: boolean }) =>
    props.disabled ? "#ccc" : "#000"};
  cursor: ${(props: { disabled: boolean }) =>
    props.disabled ? "not-allowed" : "pointer"};
`;

const ButtonText = styled.span`
  margin-right: 10px;
`;

interface CardSubmitButtonProps {
  disabled?: boolean;
}

const CardSubmitButton: React.FC<CardSubmitButtonProps> = ({
  disabled = false,
}) => {
  const handleClick = () => {
    if (disabled) return;
    alert("저장 완료");
  };

  return (
    <ButtonBox disabled={disabled} onClick={handleClick}>
      <ButtonText>다음</ButtonText>
    </ButtonBox>
  );
};

export default CardSubmitButton;
