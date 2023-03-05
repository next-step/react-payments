import React from "react";
import styled from "styled-components";

const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
  cursor: pointer;
`;

const ButtonText = styled.span`
  margin-right: 10px;
`;

const CardSubmitButton: React.FC = () => {
  const handleClick = () => {
    alert("저장 완료");
  };

  return (
    <ButtonBox onClick={handleClick}>
      <ButtonText>다음</ButtonText>
    </ButtonBox>
  );
};

export default CardSubmitButton;
