import styled from "styled-components";
import useKeyboardContext from "../hooks/useKeyboardContext";

type ComponentProps = {
  children?: JSX.Element | JSX.Element[] | null;
};
const DIGIT_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Keyboard({ children }: ComponentProps) {
  const { isOpen } = useKeyboardContext();
  const onClick = (digit: number) => {};

  return (
    <>
      {isOpen && (
        <Dimmed>
          <Box>
            <DigitWrapper>
              {DIGIT_LIST.map((digit: number, idx) => (
                <DigitButton key={idx} onClick={() => onClick(digit)}>
                  {digit}
                </DigitButton>
              ))}
            </DigitWrapper>
            <BottomWrapper>
              <DigitButton onClick={() => onClick(0)}>0</DigitButton>
            </BottomWrapper>
          </Box>
        </Dimmed>
      )}
    </>
  );
}

const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  z-index: 5;
`;
const Box = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 5px 5px 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  z-index: 10;
`;

const DigitWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 80%;
`;

const BottomWrapper = styled.div`
  height: 20%;
  display: grid;
  width: 100%;
`;

const DigitButton = styled.button`
  border-color: #ecebf1;
  border: 1px solid;
  outline: none;
  background-color: #e5e5e5;
  color: #686868;
  font-weight: bold;
  font-size: 2rem;
`;

export default Keyboard;
