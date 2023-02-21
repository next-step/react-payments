import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header, TextButton } from '@/components';
import { RightArrowIcon } from '@/assets';
import { CardFields, PreviewCard, CardFieldProvider } from './components';
import styled from '@emotion/styled';

const CreateCardPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <Header
        title="카드 추가"
        leftIcon={<RightArrowIcon />}
        onIconClick={handleClick}
      />
      <CardFieldProvider>
        <PreviewCard />
        <CardFields />
      </CardFieldProvider>
      <TextButtonContainer>
        <TextButton text="다음" onClick={() => console.log('clicked')} />
      </TextButtonContainer>
    </>
  );
};

export default CreateCardPage;

const TextButtonContainer = styled.div`
  width: 100%;
  text-align: right;
`;
