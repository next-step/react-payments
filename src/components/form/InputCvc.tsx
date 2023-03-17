import { S } from '../../styles/Input';
import Input from '../common/Input';
import React, { RefObject } from 'react';
import { useCardValidation } from '../../context/CardContext';
import QuestionIcon from '../icon/QuestionIcon';
import { COLOR } from '../../constant/color';
import { useModalState } from '../../context/ModalContext';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value: string;
  refs: RefObject<HTMLInputElement>;
}

const InputCvc = ({ onChange, value, refs }: IProps) => {
  const { validCvc } = useCardValidation();
  const { setModalState } = useModalState();
  return (
    <S.InputContainer>
      <S.InputTitle>보안코드(CVC/CVV)</S.InputTitle>
      <S.Row>
        <Input
          id="cvc"
          name="cvc"
          onChange={onChange}
          type={'password'}
          className={'w-25'}
          maxLength={3}
          value={value}
          ref={refs}
        />
        <S.SvgWrap
          onClick={() =>
            setModalState({ type: 'MESSAGE_TOOLTIP', isShow: true })
          }
        >
          <QuestionIcon width={'27px'} height={'27px'} color={COLOR.GREY_2} />
        </S.SvgWrap>
      </S.Row>
      {!validCvc && value && <S.Error>보안코드를 입력해 주세요.</S.Error>}
    </S.InputContainer>
  );
};

export default InputCvc;
