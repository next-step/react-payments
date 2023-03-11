import React from 'react';
// import { S } from '../styles/card';
import { CardInfoType } from '../type/card';
import styled from '@emotion/styled';
import { COLOR } from '../constant/color';

interface ICardPreview extends CardInfoType {
  onClick?: () => void;
  isCursor?: boolean;
}

const S = {
  CardBox: styled.div<{
    isCursor: ICardPreview['isCursor'];
    backgroundColor: ICardPreview['color'];
    isSizeBig: ICardPreview['isSizeBig'];
  }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${(props) => (props.isSizeBig ? '290px' : '208px')};
    height: ${(props) => (props.isSizeBig ? '180px' : '130px')};
    padding: ${(props) => (props.isSizeBig ? '17px 20px' : '13px 15px')};
    margin: 0 auto;
    border-radius: 5px;
    background-color: ${(props) => props.backgroundColor || COLOR.GREY_1};
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  `,
  CardCompany: styled.div`
    font-size: 10px;
    color: ${COLOR.BLACK};
  `,
  CardChip: styled.div<{ isSizeBig: ICardPreview['isSizeBig'] }>`
    width: ${(props) => (props.isSizeBig ? '55px' : '40px')};
    height: ${(props) => (props.isSizeBig ? '35px' : '25px')};
    background: #cbba64;
    border-radius: 4px;
  `,

  CardNumWrap: styled.div<{ isSizeBig: ICardPreview['isSizeBig'] }>`
    display: flex;
    justify-content: center;
    font-size: ${(props) => (props.isSizeBig ? '20px' : '15px')};
    color: ${COLOR.BLACK};
  `,
  CardNum: styled.span`
    display: inline-block;
    width: 50px;
    height: 15px;
    margin: 0 5px;
  `,
  CardInfoWrap: styled.div`
    margin-top: 15px;
  `,
  CardInfo: styled.div<{ isSizeBig: ICardPreview['isSizeBig'] }>`
    display: flex;
    justify-content: space-between;
    margin-top: ${(props) => (props.isSizeBig ? '10px' : '8px')};
    font-size: ${(props) => (props.isSizeBig ? '17px' : '12px')};
    color: ${COLOR.BLACK};
  `,
  Name: styled.div``,
  Expire: styled.div``,
  CardBottom: styled.div``,
};

const CardPreview = ({
  digits,
  expire,
  name,
  company,
  color,
  onClick,
  isCursor,
  isSizeBig,
}: ICardPreview) => {
  return (
    <S.CardBox
      onClick={onClick}
      isCursor={isCursor ?? false}
      backgroundColor={color}
      isSizeBig={isSizeBig ?? false}
    >
      <S.CardCompany>{company || '하나카드'}</S.CardCompany>
      <S.CardBottom>
        <S.CardChip isSizeBig={isSizeBig ?? false} />
        <S.CardInfoWrap>
          <S.CardNumWrap isSizeBig={isSizeBig ?? false}>
            <S.CardNum>{digits.digit1}</S.CardNum>

            <S.CardNum>{digits.digit2}</S.CardNum>
            <S.CardNum>{'*'.repeat(String(digits.digit3).length)}</S.CardNum>
            <S.CardNum>{'*'.repeat(String(digits.digit4).length)}</S.CardNum>
          </S.CardNumWrap>
          <S.CardInfo isSizeBig={isSizeBig ?? false}>
            <S.Name>{name || 'NAME'}</S.Name>
            <S.Expire>{expire || 'MM/YY'}</S.Expire>
          </S.CardInfo>
        </S.CardInfoWrap>
      </S.CardBottom>
    </S.CardBox>
  );
};

export default CardPreview;
