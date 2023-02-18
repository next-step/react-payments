import React from 'react';
import { CardFieldProvider } from './components/CardFieldContext';
import { CardFields } from './components/CardFields';
import { PreviewCard } from './components/PreviewCard';
import { Header } from '@/components/Header';
import { RightArrowIcon } from '@/assets';

const CreateCardPage = () => {
  return (
    <>
      <Header title="카드 추가" leftIcon={<RightArrowIcon />} />
      <CardFieldProvider>
        <PreviewCard />
        <CardFields />
      </CardFieldProvider>
    </>
  );
};

export default CreateCardPage;
