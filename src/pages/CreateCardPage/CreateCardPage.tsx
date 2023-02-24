import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header, TextButton } from '@/components';
import { RightArrowIcon } from '@/assets';
import { CardFields, PreviewCard, CardFieldProvider } from './components';
import styled from '@emotion/styled';
import BottomModal from '@/components/Modal/BottomModal';

const CreateCardPage = () => {
  const navigate = useNavigate();

  const [isOpen, _setIsOpen] = useState(true);
  const onClose = () => _setIsOpen((prev) => false);

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
      <BottomModal isOpen={isOpen} onClose={onClose}>
        {<div></div>}
      </BottomModal>
    </>
  );
};

export default CreateCardPage;

const TextButtonContainer = styled.div`
  width: 100%;
  text-align: right;
`;
