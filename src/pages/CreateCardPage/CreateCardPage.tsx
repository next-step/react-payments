import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '@/components';
import { RightArrowIcon } from '@/assets';
import { CardFields, PreviewCard, CardFieldProvider } from './components';

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
    </>
  );
};

export default CreateCardPage;
