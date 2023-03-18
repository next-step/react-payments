// 버튼을 누르면 input에 값이 찍히게
import { initialVirtualKeyBoard } from 'components/common/VirtualKeyBoard/utils';
import { Key } from 'components/common/VirtualKeyBoard/VirtualKeyBoard.styles';

// clear는 input값 다지움 , x는 한글자씩만지움
const useVirtualKeyBoard = () => {
  const keyBoardNumbers = initialVirtualKeyBoard().map((value) => <Key key={value}>{value}</Key>);

  return { keyBoardNumbers };
};

export default useVirtualKeyBoard;
