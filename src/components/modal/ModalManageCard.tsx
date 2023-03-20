import React, { useEffect, useRef, useState } from 'react';
import {
  useCardListDispatch,
  useCardListState,
} from '../../context/CardListContext';
import styled from '@emotion/styled';
import { COLOR } from '../../constant/color';
import { CardInfoType } from '../../type/card';
import { useModalState } from '../../context/ModalContext';

const S = {
  Content: styled.div`
    height: 100%;
  `,
  Title: styled.h2`
    margin-bottom: 30px;
    font-size: 20px;
    text-align: center;
  `,
  Row: styled.div`
    margin-bottom: 40px;
  `,
  Company: styled.p`
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: bold;
  `,
  Nickname: styled.p`
    font-size: 15px;
  `,
  ButtonWrap: styled.div`
    display: flex;
    justify-content: space-between;
    & > button {
      width: 48%;
      padding: 10px 0;
      border: 1px solid ${COLOR.GREY_1};
      border-radius: 5px;
    }
  `,
  ButtonDelete: styled.button`
    color: ${COLOR.RED};
  `,
  ButtonNicknameEdite: styled.button``,
  ButtonConfirm: styled.button`
    width: 100%;
    padding: 10px 0;
    border: 1px solid ${COLOR.GREY_1};
    border-radius: 5px;
  `,
  Input: styled.input`
    width: 100%;
    border-bottom: 1px solid ${COLOR.BLACK};
    outline: none;
  `,
};

const ModalManageCard = () => {
  const cardList = useCardListState();
  const { setModalState } = useModalState();
  const { updateNickname, deleteCard } = useCardListDispatch();
  const [selectCardInfo, setSelectCardInfo] = useState<CardInfoType>();
  const [isEdited, setIsEdited] = useState(false);
  const nicknameRef = useRef<HTMLInputElement | null>(null);

  const onClickDeleteCard = () => {
    const selectIdx = cardList.findIndex((card) => card.isSelect);
    const confirmRes = confirm('등록된 카드를 삭제하시겠습니까?');
    if (confirmRes) {
      deleteCard(selectIdx);
      setModalState({ type: null, isShow: false });
    }
  };

  const onClickUpdateNickname = () => {
    const selectIdx = cardList.findIndex((card) => card.isSelect);
    const value = nicknameRef.current?.value as string;
    updateNickname(selectIdx, value);
    alert('별칭 설정이 완료되었습니다');
    setModalState({ type: null, isShow: false });
  };

  useEffect(() => {
    const selectCard = cardList.filter((card) => card.isSelect);
    if (selectCard.length > 1) throw Error('SELECT ERROR');

    setSelectCardInfo(selectCard[0]);
  }, [cardList]);

  return (
    <S.Content>
      <S.Title>카드 관리</S.Title>
      <S.Row>
        <S.Company>{selectCardInfo?.company}</S.Company>
        {!isEdited ? (
          <S.Nickname>{selectCardInfo?.nickname}</S.Nickname>
        ) : (
          <S.Input
            type="text"
            placeholder={selectCardInfo?.nickname}
            maxLength={30}
            ref={nicknameRef}
          />
        )}
      </S.Row>
      {!isEdited ? (
        <S.ButtonWrap>
          <S.ButtonDelete onClick={onClickDeleteCard}>카드 삭제</S.ButtonDelete>
          <S.ButtonNicknameEdite onClick={() => setIsEdited(true)}>
            카드명 수정
          </S.ButtonNicknameEdite>
        </S.ButtonWrap>
      ) : (
        <S.ButtonConfirm onClick={onClickUpdateNickname}>확인</S.ButtonConfirm>
      )}
    </S.Content>
  );
};

export default ModalManageCard;
