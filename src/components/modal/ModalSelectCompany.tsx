import React from 'react';
import { COLOR } from '../../constant/color';
import styled from '@emotion/styled';
import { useCardDispatch } from '../../context/CardContext';
import { useModalState } from '../../context/ModalContext';
import { cardCompanyList } from '../../data/init';

export interface CardCompanyType {
  company: string;
  color: string;
}

const S = {
  CompanyChipUl: styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 25px;
  `,
  CompanyChipLi: styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5px;
    cursor: pointer;
  `,
  Color: styled.div<{ color: CardCompanyType['color'] }>`
    width: 37px;
    height: 37px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  `,
  Title: styled.div`
    margin-top: 10px;
    font-size: 12px;
    color: ${COLOR.BLACK_1};
    text-align: center;
    white-space: nowrap;
  `,
};

const ModalSelectCompany = () => {
  const dispatch = useCardDispatch();
  const { setModalState } = useModalState();
  const updateCompany = ({ company, color }: CardCompanyType) => {
    dispatch({
      type: 'SET_COMPANY',
      company: company,
      color: color,
    });

    setModalState({ isShow: false, type: 'SELECT_COMPANY' });
  };
  return (
    <S.CompanyChipUl>
      {cardCompanyList.map((card, index) => (
        <S.CompanyChipLi key={index} onClick={() => updateCompany(card)}>
          <S.Color color={card.color} />
          <S.Title>{card.company}</S.Title>
        </S.CompanyChipLi>
      ))}
    </S.CompanyChipUl>
  );
};

export default ModalSelectCompany;
