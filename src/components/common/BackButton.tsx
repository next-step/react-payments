import styled from "styled-components";

const BackButtonIcon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const BackButtonText = styled.span`
  font-size: 28px;
  font-weight: 300;
  color: #383838;
`;

interface BackButtonProps {
  handleGoBack: () => void;
}

const BackButton = ({ handleGoBack }: BackButtonProps) => {
  return (
    <BackButtonIcon onClick={handleGoBack}>
      <BackButtonText>{"<"}</BackButtonText>
    </BackButtonIcon>
  );
};

export default BackButton;
