import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header, TextButton } from '@/components';
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
      <TextButton text="다음" onClick={() => console.log('clicked')} />
    </>
  );
};

export default CreateCardPage;
